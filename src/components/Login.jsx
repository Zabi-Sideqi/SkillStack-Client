// client/src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, EyeOff, Eye, LogIn, Mail, Lock } from 'lucide-react';
import { loginStyles } from '../assets/dummyStyles';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = ({ onLoginSuccess = null }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const API_BASE = 'http://localhost:5000';

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!isValidEmail(email)) e.email = "Please enter a valid email";

    if (!password) e.password = "Password is required";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitError("");
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setLoading(true);
    try {
      const payload = { email: email.trim().toLowerCase(), password };
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        // Failed to parse JSON; keep data as null
        data = null;
      }

      if (!res.ok) {
        const errorMsg = data?.message || 'Login failed';
        setSubmitError(errorMsg);
        return;
      }

/*       if (data?.token) {
        try {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('currentUser', JSON.stringify(data.user || { email: payload.email }));
        } catch (storageError) {
          console.warn('Failed to persist auth state to localStorage:', storageError);
        }
      } */
     const token = data?.token || data?.jwt || data?.accessToken;

if (token) {
  try {
    localStorage.setItem('authToken', token);
    localStorage.setItem('currentUser', JSON.stringify(data.user || { email: payload.email }));
  } catch (storageError) {
    console.warn('Failed to persist auth state to localStorage:', storageError);
  }
} else {
  console.warn('⚠️ No token returned from backend login response:', data);
}


      const user = data?.user || { email: payload.email };
      window.dispatchEvent(new CustomEvent('authChanged', { detail: { user } }));

      if (typeof onLoginSuccess === 'function') onLoginSuccess(user);
      navigate('/', { replace: true });

    } catch (err) {
      console.error('Login error:', err);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={loginStyles.pageContainer}>
      <div className={loginStyles.bubble1}></div>
      <div className={loginStyles.bubble2}></div>

      <Link to="/" className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>Home</span>
      </Link>

      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit} className={loginStyles.form} noValidate>
          <div className={loginStyles.formWrapper}>
            <div className={loginStyles.animatedBorder}>
              <div className={loginStyles.formContent}>
                <h2 className={loginStyles.heading}>
                  <span className={loginStyles.headingIcon}>
                    <LogIn className={loginStyles.headingIconInner} />
                  </span>
                  <span className={loginStyles.headingText}>Login</span>
                </h2>
                <p className={loginStyles.subtitle}>
                  Sign in to continue to Quiz. Light, clean UI - smooth micro-animations and easy validation.
                </p>

                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Email</span>
                  <div className={loginStyles.inputContainer}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((s) => ({ ...s, email: undefined }));
                      }}
                      className={`${loginStyles.input} ${errors.email ? loginStyles.inputError : loginStyles.inputNormal}`}
                      placeholder="Enter your email"
                      required
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <Mail className={loginStyles.inputIconInner} />
                  </div>
                  {errors.email && <span className={loginStyles.errorText}>{errors.email}</span>}
                </label>

                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Password</span>
                  <div className={loginStyles.inputContainer}>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors((s) => ({ ...s, password: undefined }));
                      }}
                      className={`${loginStyles.input} ${loginStyles.passwordInput} ${errors.password ? loginStyles.inputError : loginStyles.inputNormal}`}
                      placeholder="Enter your password"
                      required
                      style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    />
                    <Lock className={loginStyles.inputIconInner} />
                    <button type="button" onClick={() => setShowPassword((s) => !s)} className={loginStyles.passwordToggle}>
                      {showPassword ? <EyeOff className={loginStyles.passwordToggleIcon} /> : <Eye className={loginStyles.passwordToggleIcon} />}
                    </button>
                  </div>
                  {errors.password && <span className={loginStyles.errorText}>{errors.password}</span>}
                </label>

                {submitError && <p className={loginStyles.submitError}>{submitError}</p>}

                <div className={loginStyles.buttonsContainer}>
                  <button type="submit" className={loginStyles.submitButton} disabled={loading}>
                    {loading ? "Logging in..." : (
                      <>
                        <LogIn className={loginStyles.submitButtonIcon} />
                        <span className={loginStyles.submitButtonText}>Login</span>
                      </>
                    )}
                  </button>

                  <div className={loginStyles.signupContainer}>
                    <div className={loginStyles.signupContent}>
                      <span className={loginStyles.signupText}>Don't have an account?</span>
                      <Link to="/signup" className={loginStyles.signupLink}>Sign up</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>

      <style>{loginStyles.animations}</style>
    </div>
  );
};

export default Login;
