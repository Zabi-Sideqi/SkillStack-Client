
// client/src/components/Signup.jsx


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { signupStyles } from '../assets/dummyStyles';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Signup = ({ onSignupSuccess = null }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_URL;

  // Validering
  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email) e.email = "Email is required";
    else if (!isValidEmail(email)) e.email = "Please enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6)
      e.password = "Password must be at least 6 characters";
    return e;
  };

  // Hantera registrering
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitError("");
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };

      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        /* ignored */
      }

      if (!res.ok) {
        const msg = data?.message || 'Signup failed';
        setSubmitError(msg);
        return;
      }

      if (data && data.token) {
        try {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem(
            'currentUser',
            JSON.stringify(
              data.user || {
                name: name.trim(),
                email: email.trim().toLowerCase(),
              }
            )
          );
        } catch {
          /* ignored */
        }
      }

      if (typeof onSignupSuccess === 'function') {
        try {
          onSignupSuccess(
            data?.user || {
              name: name.trim(),
              email: email.trim().toLowerCase(),
            }
          );
        } catch { /* ignored */ }
      }

      navigate('/login', { replace: true });

    } catch (err) {
      console.error('signup error', err);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={signupStyles.pageContainer}>
      {/* Tillbaka-knapp */}
      <Link to="/login" className={signupStyles.backButton}>
        <ArrowLeft className={signupStyles.backButtonIcon} />
        <span className={signupStyles.backButtonText}>Back</span>
      </Link>

      {/* Formulär */}
      <div className={signupStyles.formContainer}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={signupStyles.animatedBorder}>
            <div className={signupStyles.formContent}>
              <h2 className={signupStyles.heading}>
                <span className={signupStyles.headingIconInner}></span>
                <span className={signupStyles.headingText}>Create Account</span>
              </h2>

              {/* Namn */}
              <label className={signupStyles.label}>
                <span className={signupStyles.labelText}>Name</span>
                <div className={signupStyles.inputContainer}>
                  <span className={signupStyles.inputIconInner}>
                    <User className={signupStyles.inputIconInner} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((s) => ({ ...s, name: undefined }));
                    }}
                    className={`${signupStyles.input} ${errors.name ? signupStyles.inputError : signupStyles.inputNormal}`}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                {errors.name && <span className={signupStyles.errorText}>{errors.name}</span>}
              </label>

              {/* Email */}
              <label className={signupStyles.label}>
                <span className={signupStyles.labelText}>Email</span>
                <div className={signupStyles.inputContainer}>
                  <span className={signupStyles.inputIconInner}>
                    <Mail className={signupStyles.inputIconInner} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((s) => ({ ...s, email: undefined }));
                    }}
                    className={`${signupStyles.input} ${errors.email ? signupStyles.inputError : signupStyles.inputNormal}`}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {errors.email && <span className={signupStyles.errorText}>{errors.email}</span>}
              </label>

              {/* Password */}
              <label className={signupStyles.label}>
                <span className={signupStyles.labelText}>Password</span>
                <div className={signupStyles.inputContainer}>
                  <span className={signupStyles.inputIconInner}>
                    <Lock className={signupStyles.inputIconInner} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors((s) => ({ ...s, password: undefined }));
                    }}
                    className={`${signupStyles.input} ${signupStyles.passwordInput} ${errors.password ? signupStyles.inputError : signupStyles.inputNormal}`}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className={signupStyles.passwordToggle}
                  >
                    {showPassword ? (
                      <EyeOff className={signupStyles.passwordToggleIcon} />
                    ) : (
                      <Eye className={signupStyles.passwordToggleIcon} />
                    )}
                  </button>
                </div>
                {errors.password && <span className={signupStyles.errorText}>{errors.password}</span>}
              </label>

              {/* Felmeddelande */}
              {submitError && <p className={signupStyles.submitError}>{submitError}</p>}

              {/* Skicka-knapp */}
              <div className={signupStyles.buttonsContainer}>
                <button type="submit" className={signupStyles.submitButton} disabled={loading}>
                  {loading ? "Creating account..." : "Sign up"}
                </button>
              </div>

              <div className={signupStyles.signupContainer}>
                <div className={signupStyles.signupContent}>
                  <span className={signupStyles.signupText}>Already have an account?</span>
                  <Link to="/login" className={signupStyles.signupLink}>Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;




