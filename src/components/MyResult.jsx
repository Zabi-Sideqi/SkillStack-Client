

//client/src/components/MyResult.jsx 
import { useCallback, useEffect, useMemo, useState } from "react";
import { resultStyles } from "../assets/dummyStyles";
import axios from "axios";
import { toast } from "react-hot-toast";

const Badge = ({ percent }) => {
  if (percent >= 85)
    return <span className={resultStyles.badgeExcellent}>Excellent</span>;
  if (percent >= 65)
    return <span className={resultStyles.badgeGood}>Good</span>;
  if (percent >= 45)
    return <span className={resultStyles.badgeAverage}>Average</span>;
  return <span className={resultStyles.badgeNeedsWork}>Needs Work</span>;
};

const MyResult = ({ apiBase = "http://localhost:5000" }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [technologies, setTechnologies] = useState([]);

  // Token for user verification
  const getAuthHeader = useCallback(() => {
    const token =
      localStorage.getItem("token") ||
      localStorage.getItem("authToken") ||
      null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  // Effect: Fetch results when component mounts or when selectedTechnology changes
  useEffect(() => {
    let mounted = true;
    const fetchResults = async (tech = "all") => {
      setLoading(true);
      setError(null);
      try {
        const q =
          tech && tech.toLowerCase() !== "all"
            ? `?technology=${encodeURIComponent(tech)}`
            : "";
        const res = await axios.get(`${apiBase}/api/results${q}`, {
          headers: { "Content-Type": "application/json", ...getAuthHeader() },
          timeout: 10000,
        });
        if (!mounted) return;
        if (res.status === 200 && res.data && res.data.success) {
          setResults(Array.isArray(res.data.results) ? res.data.results : []);
        } else {
          setResults([]);
          toast.warn("Unexpected server response while fetching results.");
        }
      } catch (err) {
        console.error(
          "Failed to fetch results:",
          err?.response?.data || err.message || err
        );
        if (!mounted) return;
        if (err?.response?.status === 401) {
          setError("Not authenticated. Please log in to view results.");
          toast.error("Not authenticated. Please login.");
        } else {
          setError("Could not load results from server.");
          toast.error("Could not load results from server.");
          setResults([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchResults(selectedTechnology);
    return () => {
      mounted = false;
    };
  }, [apiBase, selectedTechnology, getAuthHeader]);

  // Effect: fetch all results once to build a list of available technologies
  useEffect(() => {
    let mounted = true;
    const fetchAllForTechList = async () => {
      try {
        const res = await axios.get(`${apiBase}/api/results`, {
          headers: { "Content-Type": "application/json", ...getAuthHeader() },
          timeout: 10000,
        });
        if (!mounted) return;
        if (res.status === 200 && res.data && res.data.success) {
          const all = Array.isArray(res.data.results) ? res.data.results : [];
          const set = new Set();
          all.forEach((r) => {
            if (r.technology) set.add(r.technology);
          });
          const arr = Array.from(set).sort((a, b) => a.localeCompare(b));
          setTechnologies(arr);
        }
      } catch (err) {
        console.error(
          "Failed to fetch technologies:",
          err?.response?.data || err.message || err
        );
      }
    };
    fetchAllForTechList();
    return () => {
      mounted = false;
    };
  }, [apiBase, getAuthHeader]);

  const makeKey = (r) => (r && r._id ? r._id : `${r.id}||${r.title}`);

  // ✅ KORRIGERAD SUMMARY - använder rätt field names
  const summary = useMemo(() => {
    const source = Array.isArray(results) ? results : [];
    const totalQs = source.reduce(
      (s, r) => s + (Number(r.totalQuestions) || 0),
      0
    );
    const totalCorrect = source.reduce(
      (s, r) => s + (Number(r.correctAnswers) || 0),  // ✅ correctAnswers istället för correct
      0
    );
    const totalWrong = source.reduce(
      (s, r) => s + (Number(r.wrongAnswers) || 0),    // ✅ wrongAnswers istället för wrong
      0
    );
    const pct = totalQs ? Math.round((totalCorrect / totalQs) * 100) : 0;
    return { totalQs, totalCorrect, totalWrong, pct };
  }, [results]);

  // Group results by the first word of the title (used as "track")
  const grouped = useMemo(() => {
    const src = Array.isArray(results) ? results : [];
    const map = {};
    src.forEach((r) => {
      const track = (r.title || "").split(" ")[0] || "General";
      if (!map[track]) map[track] = [];
      map[track].push(r);
    });
    return map;
  }, [results]);

  // Handler called when user clicks a technology filter button
  const handleSelectTech = (tech) => {
    setSelectedTechnology(tech || "all");
  };

  const deleteResult = async (resultId) => {
    try {
      const res = await axios.delete(`${apiBase}/api/results/${resultId}`, {
        headers: { ...getAuthHeader() },
      });

      if (res.data && res.data.success) {
        // Remove the deleted result from state
        setResults(prevResults => prevResults.filter(r => r._id !== resultId));
        toast.success('Result deleted successfully!');
      } else {
        toast.error('Failed to delete result.');
      }
    } catch (err) {
      console.error('Error deleting result:', err);
      toast.error('Could not delete result.');
    }
  };

  return (
    <div className={resultStyles.pageContainer}>
      <div className={resultStyles.container}>
        <header className={resultStyles.header}>
          <div>
            <h1 className={resultStyles.title}>Quiz Result</h1>
            
            {/* ✅ SUMMARY DISPLAY - visar totalstatistik */}
            {results && results.length > 0 && (
              <div className={resultStyles.summaryContainer}>
                <h3 className={resultStyles.summaryTitle}>Overall Statistics</h3>
                <div className={resultStyles.summaryGrid}>
                  <div className={resultStyles.summaryItem}>
                    <div className={resultStyles.summaryNumberBlue}>{summary.totalQs}</div>
                    <div className={resultStyles.summaryLabelBlue}>Total Questions</div>
                  </div>
                  <div className={resultStyles.summaryItem}>
                    <div className={resultStyles.summaryNumberGreen}>{summary.totalCorrect}</div>
                    <div className={resultStyles.summaryLabelGreen}>Correct Answers</div>
                  </div>
                  <div className={resultStyles.summaryItem}>
                    <div className={resultStyles.summaryNumberRed}>{summary.totalWrong}</div>
                    <div className={resultStyles.summaryLabelRed}>Wrong Answers</div>
                  </div>
                  <div className={resultStyles.summaryItem}>
                    <div className={resultStyles.summaryNumberPurple}>{summary.pct}%</div>
                    <div className={resultStyles.summaryLabelPurple}>Overall Score</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={resultStyles.headerControls}/>
        </header>

        <div className={resultStyles.filterContainer}>
          <div className={resultStyles.filterContent}>
            <div className={resultStyles.filterButtons}>
              <span className={resultStyles.filterLabel}>Filter by tech</span>
              <button 
                onClick={() => handleSelectTech('all')}
                className={`${resultStyles.filterButton} ${
                  selectedTechnology === "all"
                    ? resultStyles.filterButtonActive
                    : resultStyles.filterButtonInactive
                }`}
              >
                All
              </button>
              
              {/* dynamic technology buttons */}
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleSelectTech(tech)}
                  className={`${resultStyles.filterButton} ${
                    selectedTechnology === tech
                      ? resultStyles.filterButtonActive
                      : resultStyles.filterButtonInactive
                  }`}
                >
                  {tech}
                </button>
              ))}

              {/* If we don't yet have technologies but results exist, derive from current results */}
              {technologies.length === 0 &&
                Array.isArray(results) &&
                results.length > 0 &&
                [
                  ...new Set(results.map((r) => r.technology).filter(Boolean)),
                ].map((tech) => (
                  <button
                    key={`fallback-${tech}`}
                    onClick={() => handleSelectTech(tech)}
                    className={`${resultStyles.filterButton} ${
                      selectedTechnology === tech
                        ? resultStyles.filterButtonActive
                        : resultStyles.filterButtonInactive
                    }`}
                    aria-pressed={selectedTechnology === tech}
                  >
                    {tech}
                  </button>
                ))}
            </div>
            <div className={resultStyles.filterStatus}>
              {selectedTechnology === "all"
                ? "All Technologies"
                : `Technology: ${selectedTechnology}`}
            </div>
          </div>
        </div>

        {loading ? (
          <div className={resultStyles.loadingContainer}>
            <div className={resultStyles.loadingSpinner} />
            <div className={resultStyles.loadingText}>
              Loading results...
            </div>
          </div>
        ) : (
          <>
            {Object.entries(grouped).map(([track, items]) => (
              <section key={track} className={resultStyles.trackSection}>
                <h2 className={resultStyles.trackTitle}>{track} Track</h2>
                <div className={resultStyles.resultsGrid}>
                  {items.map((r) => (
                    <StripCard 
                      key={makeKey(r)} 
                      result={r}
                      onDelete={deleteResult} 
                    />
                  ))}
                </div>
              </section>
            ))}
            {Array.isArray(results) && results.length === 0 && !error && (
              <div className={resultStyles.emptyState}>
                No results found. Take some quizzes to see results here.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// STRIP CARD COMPONENT
function StripCard({ result, onDelete }) {
  const percent = result.totalQuestions
    ? Math.round((Number(result.correctAnswers) / Number(result.totalQuestions)) * 100)
    : 0;

  const getLevel = (res) => {
    const id = (res.id || "").toString().toLowerCase();
    const title = (res.title || "").toString().toLowerCase();
    if (id.includes("basic") || title.includes(" basic"))
      return { letter: "B", style: resultStyles.levelBasic };
    if (id.includes("intermediate") || title.includes(" intermediate"))
      return { letter: "I", style: resultStyles.levelIntermediate };
    return { letter: "A", style: resultStyles.levelAdvanced };
  };

  const level = getLevel(result);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this result?')) {
      try {
        await onDelete(result._id);
      } catch (error) {
        console.error('Error deleting result:', error);
      }
    }
  };
  
  return (
    <article className={resultStyles.card}>
      <div className={resultStyles.cardAccent}></div>
      <div className={resultStyles.cardContent}>
        {/* Delete button i nedre högra hörnet */}
        <button 
          onClick={handleDelete}
          className={resultStyles.deleteButton}
          title="Delete this result"
        >
          🗑️
        </button>

        <div className={resultStyles.cardHeader}>
          <div className={resultStyles.cardInfo}>
            <div className={`${resultStyles.levelAvatar} ${level.style}`}>
              {level.letter}
            </div>
            <div className={resultStyles.cardText}>
              <h3 className={resultStyles.cardTitle}>{result.title}</h3>
              <div className={resultStyles.cardMeta}>
                {result.totalQuestions} Qs 
                {result.timeSpent ? ` • ${result.timeSpent}` : ""}
              </div>
            </div>
          </div>

          <div className={resultStyles.cardPerformance}>
            <div className={resultStyles.performanceLabel}>
              Your Score
            </div>
            <div className={resultStyles.badgeContainer}>
              <Badge percent={percent} />
            </div>
          </div>
        </div>
        <div className={resultStyles.cardStats}>
          <div className={resultStyles.statItem}>
            Correct:
            <span className={resultStyles.statNumber}>{result.correctAnswers}</span>
          </div>
          <div className={resultStyles.statItem}>
            Wrong:
            <span className={resultStyles.statNumber}>{result.wrongAnswers}</span>
          </div>
          <div className={resultStyles.statItem}>
            Score:
            <span className={resultStyles.statNumber}>{percent}%</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyResult;