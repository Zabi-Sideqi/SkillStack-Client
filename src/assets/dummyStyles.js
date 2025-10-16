// client/src/assets/dummyStyles.js 
export const navbarStyles = {
  // Main nav container with animated gradient
  nav: "w-full bg-gradient-to-r from-slate-950 via-indigo-950/50 to-slate-950 border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20 py-3 sm:py-4 px-4 sm:px-6 lg:px-10 relative backdrop-blur-xl",

  // Decorative pattern
  decorativePattern: "absolute inset-0 opacity-20",
  decorativePatternBackground:
    "bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.15),rgba(139,92,246,0.1),rgba(0,0,0,0))]",

  // Floating bubbles with neon glow
  bubble1: "absolute top-0 left-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-pulse",
  bubble2: "absolute bottom-0 right-1/3 w-80 h-80 bg-violet-500/30 rounded-full blur-3xl animate-pulse",
  bubble3: "absolute top-1/2 right-1/4 w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse",

  // Main container
  container: "max-w-6xl mx-auto flex items-center justify-between relative z-10",

  // Logo section
  logoContainer: "flex items-center flex-shrink-0",
  logoButton:
    "inline-flex items-center p-0 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transform transition-transform duration-200 hover:scale-110",
  logoLink:
    "relative bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-0.5 rounded-lg border border-cyan-400/50 shadow-lg shadow-cyan-500/50",
  logoInner: "bg-slate-950/90 backdrop-blur-sm p-1 rounded-lg",
  logoImage: "h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-cover border border-cyan-400/30 shadow-lg shadow-cyan-500/30",

  // Title section with holographic effect
  titleContainer: "flex-1 flex justify-center px-3",
  titleBackground:
    "bg-gradient-to-r from-slate-900/80 via-indigo-950/80 to-slate-900/80 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-cyan-400/50 shadow-2xl shadow-cyan-500/30 max-w-full",
  titleText:
    "text-sm sm:text-base md:text-lg lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent text-center truncate animate-gradient",

  // Desktop buttons
  desktopButtonsContainer: "hidden md:flex items-center cursor-pointer flex-shrink-0 space-x-3",
  spacer: "hidden sm:block w-2",

  // Button styles with neon glow
  resultsButton:
    "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/50 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-cyan-400/30",
  logoutButton:
    "inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold shadow-lg shadow-rose-500/50 transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/70 focus:outline-none focus:ring-2 focus:ring-rose-400 border border-rose-400/30",
  loginButton:
    "inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-bold shadow-lg shadow-violet-500/50 transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/70 focus:outline-none focus:ring-2 focus:ring-violet-400 border border-violet-400/30",
  buttonIcon: "h-4 w-4 flex-shrink-0",

  // Mobile menu
  mobileMenuContainer: "md:hidden flex items-center",
  menuToggleButton:
    "inline-flex items-center justify-center p-2 rounded-xl bg-slate-900/90 backdrop-blur-sm shadow-lg shadow-cyan-500/30 border border-cyan-400/50 hover:bg-slate-800/90 transform transition focus:outline-none focus:ring-2 focus:ring-cyan-400",
  menuIcon: "h-5 w-5 text-cyan-400",
  mobileMenuPanel:
    "absolute right-4 top-full mt-3 w-48 bg-slate-950/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-cyan-500/30 border border-cyan-400/50 z-[9999] overflow-visible",
  mobileMenuList: "divide-y divide-cyan-500/20",
  mobileMenuItem:
    "w-full text-left px-4 py-3 flex items-center gap-2 text-sm text-cyan-100 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20 transition-colors",
  mobileMenuIcon: "h-4 w-4 text-cyan-400",

  // Animations
  animations: `
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.5; }
    }
    .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @media (max-width: 420px) {
      nav { padding-left: 12px; padding-right: 12px; }
    }
  `,
}

export const loginStyles = {
  // Page container with animated gradient
  pageContainer:
    "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center p-4 sm:p-6 relative overflow-visible",

  // Background decorative elements with neon glow
  bubble1: "absolute top-0 left-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse",
  bubble2: "absolute bottom-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-cyan-100 bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg shadow-cyan-500/30 border border-cyan-400/50 hover:bg-slate-800/90 transform transition hover:scale-105",
  backButtonIcon: "w-4 h-4 text-cyan-400",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-sm pt-10 sm:max-w-md md:max-w-lg lg:max-w-lg relative z-20",
  form: "w-full",
  formWrapper: "relative",
  animatedBorder:
    "rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 shadow-2xl shadow-cyan-500/50 animate-gradient",
  formContent: "bg-slate-950/95 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-2xl",

  // Heading with holographic effect
  heading: "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/50",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent",

  // Subtitle
  subtitle: "text-sm text-cyan-200/70 mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-4",
  labelText: "text-sm font-medium text-cyan-100",
  inputContainer: "mt-2 relative",
  inputIcon: "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-cyan-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-all duration-200 border bg-slate-900/50 backdrop-blur-sm text-cyan-100 placeholder-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 shadow-inner",
  inputNormal: "border-cyan-500/30",
  inputError: "border-rose-500/50 focus:ring-rose-400 focus:border-rose-400",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-cyan-300/70 hover:text-cyan-400 transition-colors cursor-pointer",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-rose-400",
  submitError: "text-sm text-rose-400 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex items-center cursor-pointer justify-center gap-3 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white font-bold shadow-xl shadow-cyan-500/50 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/70 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 border border-cyan-400/30",
  submitButtonIcon: "w-4 h-4",
  submitButtonText: "text-sm sm:text-base",

  // Signup section
  signupContainer: "mt-6",
  signupContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30",
  signupText: "text-sm text-cyan-200/70",
  signupLink: "text-cyan-400 font-semibold hover:text-cyan-300 hover:underline transition-all",

  // Animations
  animations: `
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
  `,
}

export const signupStyles = {
  // Page container with animated gradient
  pageContainer:
    "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center p-4 sm:p-6 relative overflow-visible",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-cyan-100 bg-slate-900/90 backdrop-blur-md px-2.5 sm:px-3 py-2 rounded-xl shadow-lg shadow-cyan-500/30 border border-cyan-400/50 hover:bg-slate-800/90 transform transition hover:scale-105",
  backButtonIcon: "w-4 h-4 text-cyan-400",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-sm pt-15 sm:max-w-md md:max-w-lg relative z-10",
  animatedBorder:
    "rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 shadow-2xl shadow-cyan-500/50 animate-gradient",
  formContent: "bg-slate-950/95 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-2xl",

  // Heading
  heading: "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/50",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent",

  // Subtitle
  subtitle: "text-sm text-cyan-200/70 mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-3 sm:mb-4",
  labelText: "text-sm font-medium text-cyan-100",
  inputContainer: "mt-2 relative",
  inputIcon: "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-cyan-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-all duration-200 border bg-slate-900/50 backdrop-blur-sm text-cyan-100 placeholder-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 shadow-inner",
  inputNormal: "border-cyan-500/30",
  inputError: "border-rose-500/50 focus:ring-rose-400 focus:border-rose-400",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-cyan-300/70 hover:text-cyan-400 transition-colors cursor-pointer",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-rose-400",
  submitError: "text-sm text-rose-400 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex cursor-pointer items-center justify-center gap-3 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white font-bold shadow-xl shadow-cyan-500/50 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/70 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 border border-cyan-400/30",

  // Login prompt section
  loginPromptContainer: "mt-5 sm:mt-6",
  loginPromptContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 sm:px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30",
  loginPromptText: "text-sm text-cyan-200/70",
  loginPromptLink: "text-cyan-400 font-semibold hover:text-cyan-300 hover:underline transition-all",

  // Animations
  animations: `
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
  `,
}

export const sidebarStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950",

  // Mobile overlay
  mobileOverlay: "fixed inset-0 bg-black/70 z-30 md:hidden backdrop-blur-sm",

  // Main container
  mainContainer: "flex xl:h-screen xl:overflow-y-hidden",

  // Sidebar styles
  sidebar:
    "fixed h-screen z-40 top-0 left-0 w-80 transform transition-transform duration-300 ease-in-out bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-r border-cyan-500/30 overflow-y-auto md:relative md:translate-x-0 md:flex md:flex-col",

  // Sidebar header
  sidebarHeader:
    "top-0 z-20 p-6 bg-gradient-to-br from-slate-900/90 to-indigo-950/90 backdrop-blur-xl text-cyan-100 relative border-b border-cyan-500/30",
  headerDecoration1: "absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl",
  headerDecoration2: "absolute bottom-0 left-0 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl",
  headerContent: "flex items-center justify-between relative z-10",
  logoContainer: "flex items-center space-x-3",
  logoIcon:
    "p-2 bg-gradient-to-br from-cyan-500/90 to-violet-500/100 rounded-xl border border-cyan-400/50 shadow-lg shadow-cyan-500/60",
  logoTitle:
    "text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent",
  logoSubtitle: "mt-1 text-cyan-200/100 text-sm",
  closeButton: "md:hidden p-2 rounded-xl hover:bg-slate-800/80 transition-colors text-cyan-400",

  // Sidebar content
  sidebarContent: "sidebar-content flex-1 overflow-y-auto p-4",
  technologiesHeader: "mb-4 flex items-center justify-between",
  technologiesTitle: "text-lg font-semibold text-cyan-100",
  technologiesCount: "text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-400/50",

  // Technology items
  techItem: "mb-3",
  techButton:
    "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-500/30",
  techButtonSelected: "border-cyan-400/80 shadow-lg shadow-cyan-500/50 bg-slate-900/80",
  techButtonNormal: "border-cyan-500/50",
  techButtonContent: "flex items-center space-x-3",
  techIcon: "p-2 rounded-lg border border-cyan-500/30 bg-slate-950/50",
  techName: "font-medium text-cyan-100",

  // Levels container
  levelsContainer:
    "mt-3 ml-2 p-3 bg-gradient-to-br from-slate-900/50 to-indigo-950/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20",
  levelsTitle: "text-sm font-medium text-cyan-100 mb-2 flex items-center",
  techBadge: "ml-2 text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-400/50",

  // Level buttons
  levelButton:
    "w-full flex items-center justify-between cursor-pointer p-3 my-2 rounded-xl border transition-all hover:bg-slate-900/70 hover:shadow-lg hover:shadow-cyan-500/30 text-cyan-100",
  levelButtonSelected:
    "border-cyan-400/70 shadow-lg shadow-cyan-500/50 font-bold bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-100",
  levelButtonNormal: "border-cyan-500/30 bg-slate-950/50 text-cyan-200",
  levelButtonContent: "flex items-center space-x-2",
  levelIcon: "p-1.5 rounded-md bg-slate-900/70 text-cyan-400",
  levelQuestions: "text-xs bg-slate-900/70 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30",

  // Sidebar footer
  sidebarFooter: "sticky bottom-0 z-20 p-4 border-t border-cyan-500/30 bg-slate-950/95 backdrop-blur-xl",
  footerContent: "flex items-center justify-center text-cyan-200/70",
  footerContentCenter: "text-center text-xs",
  footerHighlight: "mt-1 text-cyan-400 font-medium",

  // Main content
  mainContent:
    "flex-1 min-h-screen p-4 md:p-8 ml-0 md:ml-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950",

  // Mobile header
  mobileHeader: "flex items-center justify-between mb-4 md:hidden",
  menuButton:
    "p-2 rounded-xl bg-slate-900/200 backdrop-blur-sm shadow-lg shadow-cyan-500/30 border border-cyan-400/50 hover:bg-slate-800/90 transition-colors",
  mobileTitle: "flex-1 mx-3",
  mobileTechInfo: "flex items-center justify-center space-x-3",
  mobileTechIcon: "p-2 rounded-xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-sm",
  mobileTechText: "text-center",
  mobileTechName: "text-sm font-semibold text-cyan-100",
  mobileTechLevel: "text-xs text-cyan-300/70",
  mobilePlaceholder: "text-center text-sm text-cyan-200/70",

  // Mobile levels
  mobileLevels: "md:hidden mb-4",
  mobileLevelsContainer: "flex gap-2 overflow-x-auto",
  mobileLevelButton:
    "flex-none px-4 py-2 rounded-xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-sm shadow-md text-sm font-medium hover:bg-slate-800/90 transition-colors text-cyan-100",

  // Welcome screen
  welcomeContainer: "h-full xl:pt-75 lg:pb-90 flex items-center justify-center",
  welcomeContent:
    "text-center max-w-2xl mx-auto bg-slate-950/90 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30",
  welcomeIcon:
    "inline-flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 rounded-2xl shadow-xl shadow-cyan-500/50 border border-cyan-400/50 mb-6",
  welcomeTitle:
    "text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4",
  welcomeDescription: "text-sm md:text-lg text-cyan-200/70 mb-6 max-w-md mx-auto",

  // Features grid
  featuresGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6",
  featureCard:
    "bg-slate-900/50 backdrop-blur-sm p-4 md:p-5 rounded-2xl border border-cyan-500/30 text-center hover:bg-slate-900/70 hover:shadow-xl hover:shadow-cyan-500/30 transition-all",
  featureIcon:
    "inline-flex items-center justify-center p-3 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-cyan-400 rounded-xl mb-3 border border-cyan-400/50 shadow-lg shadow-cyan-500/50",
  featureTitle: "font-semibold text-cyan-100 mb-2",
  featureDescription: "text-xs md:text-sm text-cyan-200/70",

  // Welcome prompt
  welcomePrompt: "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 p-3 md:p-4 rounded-2xl border border-cyan-400/50",
  welcomePromptText: "text-cyan-400 font-medium flex items-center justify-center",

  // Level selection
  levelSelectionContainer: "h-full xl:mt-60 md:pb-200 pb-30 flex items-center justify-center",
  levelSelectionContent:
    "text-center bg-slate-950/90 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30 max-w-md",
  techSelectionIcon:
    "p-5 rounded-2xl inline-flex mb-6 shadow-xl shadow-cyan-500/50 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-400/50",
  techSelectionTitle:
    "text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2",
  techSelectionDescription: "text-cyan-200/70 mb-6",
  techSelectionPrompt: "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 p-4 rounded-xl border border-cyan-400/50",
  techSelectionPromptText: "text-cyan-400 font-medium",

  // Results screen
  resultsContainer: "h-full lg:pb-140 xl:pb-0 md:pb-90 flex items-center justify-center",
  resultsContent:
    "bg-slate-950/90 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30 max-w-2xl w-full",
  resultsHeader: "text-center",
  performanceIcon:
    "p-4 rounded-2xl inline-flex mb-6 shadow-xl shadow-cyan-500/50 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-400/50",
  resultsTitle:
    "text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2",
  resultsSubtitle: "text-cyan-200/70 mb-2",
  performanceBadge:
    "inline-block text-cyan-400 bg-cyan-500/20 px-4 py-1 rounded-full text-sm font-medium mb-6 border border-cyan-400/50",

  // Score grid
  scoreGrid: "grid grid-cols-2 gap-4 mb-6",
  scoreCard:
    "bg-gradient-to-br from-slate-900/70 to-indigo-950/70 backdrop-blur-sm p-4 rounded-2xl border border-cyan-500/30 text-center shadow-lg shadow-cyan-500/20",
  scoreIcon:
    "inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-cyan-400 rounded-xl mb-3 border border-cyan-400/50 shadow-lg shadow-cyan-500/50",
  scoreNumber: "text-2xl font-bold text-cyan-400",
  scoreLabel: "text-cyan-100 font-medium",

  // Score progress
  scoreProgress: "bg-slate-900/50 backdrop-blur-sm p-4 rounded-2xl border border-cyan-500/30 mb-6",
  scoreProgressHeader: "flex items-center justify-between mb-4",
  scoreProgressTitle: "text-cyan-100 font-semibold",
  scoreProgressPercentage: "text-cyan-400 font-bold",
  scoreProgressBar: "w-full bg-slate-800/50 rounded-full h-4 border border-cyan-500/30 overflow-visible",
  scoreProgressFill:
    "h-4 rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-cyan-500/70",

  // Quiz container
  quizContainer: "max-w-3xl mx-auto",
  quizHeader:
    "mb-4 bg-slate-950/90 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-xl shadow-cyan-500/20 border border-cyan-500/30",
  quizTitleContainer: "flex items-center justify-between mb-2",
  quizTitle: "text-xl md:text-2xl font-bold text-cyan-100",
  quizCounter: "text-sm bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-medium border border-cyan-400/50",
  progressBar: "w-full bg-slate-800/50 rounded-full h-2.5 mb-2 border border-cyan-500/30 overflow-visible",
  progressFill:
    "bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/70",

  // Question container
  questionContainer:
    "bg-slate-950/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30",
  questionHeader: "flex items-center mb-2",
  questionIcon:
    "bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-cyan-400 p-2 rounded-xl mr-3 border border-cyan-400/50 shadow-lg shadow-cyan-500/50",
  questionText: "text-lg md:text-xl font-semibold text-cyan-100",

  // Options container
  optionsContainer: "space-y-4 mt-6",
  optionButton:
    "w-full cursor-pointer text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 hover:shadow-xl hover:shadow-cyan-500/30",
  optionNormal: "border-cyan-500/30 hover:border-cyan-400/70 text-cyan-100",
  optionCorrect:
    "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-cyan-400 text-cyan-100 shadow-xl shadow-cyan-500/50",
  optionIncorrect:
    "bg-gradient-to-r from-rose-500/20 to-pink-500/20 border-rose-400 text-cyan-100 shadow-xl shadow-rose-500/50",
  optionContent: "flex items-center",
  optionIconCorrect: "mr-3 text-cyan-400 flex-shrink-0",
  optionIconIncorrect: "mr-3 text-rose-400 flex-shrink-0",
  optionIconEmpty: "w-5 h-5 rounded-full border-2 border-cyan-500/50 mr-3 flex-shrink-0",
  optionText: "text-sm md:text-lg text-cyan-100",

  // Loading container
  loadingContainer: "h-full flex items-center justify-center",
  loadingContent:
    "text-center bg-slate-950/90 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30",
  loadingSpinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4 shadow-lg shadow-cyan-500/50",
  loadingTitle: "text-lg md:text-xl font-semibold text-cyan-100 mb-2",
  loadingDescription: "text-sm md:text-base text-cyan-200/70",

  // Custom styles
  customStyles: `
    .sidebar-content {
      -webkit-overflow-scrolling: touch;
    }

    aside .sidebar-content::-webkit-scrollbar {
      width: 10px;
    }
    aside .sidebar-content::-webkit-scrollbar-track {
      background: transparent;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, rgb(6 182 212 / 0.5), rgb(139 92 246 / 0.5));
      border-radius: 999px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, rgb(6 182 212 / 0.7), rgb(139 92 246 / 0.7));
    }

    aside .sidebar-content {
      scrollbar-width: thin;
      scrollbar-color: rgb(6 182 212 / 0.5) transparent;
    }
  `,
}

export const resultStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-6",
  container: "max-w-6xl mx-auto",

  // Header
  header: "mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4",
  title:
    "text-2xl md:text-3xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent",
  headerControls: "flex items-center gap-3",

  // Filter section
  filterContainer: "mb-4",
  filterContent: "flex items-center justify-between gap-3",
  filterButtons: "flex flex-wrap items-center gap-2",
  filterLabel: "text-sm text-cyan-200/70 mr-2",
  filterButton: "px-3 py-1 rounded-xl text-sm font-medium border shadow-md focus:outline-none transition-all",
  filterButtonActive:
    "bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/50",
  filterButtonInactive: "bg-slate-900/50 backdrop-blur-sm text-cyan-100 border-cyan-500/30 hover:bg-slate-900/70",
  filterStatus: "text-sm text-cyan-200/70",

  // Loading state
  loadingContainer: "text-center py-20",
  loadingSpinner:
    "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mb-4 shadow-lg shadow-cyan-500/50",
  loadingText: "text-cyan-200/70",

  // Track sections
  trackSection: "mb-6",
  trackTitle: "text-lg md:text-xl lg:text-lg font-semibold mb-3 text-cyan-100",

  // Results grid
  resultsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4",

  // Empty state
  emptyState: "text-center py-12 text-cyan-200/70",

  // Badge styles
  badgeExcellent:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/30 to-violet-500/30 text-cyan-400 border border-cyan-400/50",
  badgeGood:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 text-violet-400 border border-violet-400/50",
  badgeAverage:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-800/50 text-cyan-300 border border-cyan-500/30",
  badgeNeedsWork:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-rose-500/30 to-pink-500/30 text-rose-400 border border-rose-400/50",

  // Card styles
  card: "relative bg-slate-950/90 backdrop-blur-xl rounded-xl shadow-xl shadow-cyan-500/20 overflow-visible border border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:border-cyan-400/70",
  cardAccent: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-fuchsia-500",
  cardContent: "p-4 md:p-5 lg:p-4 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between gap-3",
  cardInfo: "flex items-center gap-3 min-w-0",
  levelAvatar:
    "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-xl font-semibold text-lg md:text-xl lg:text-lg border shadow-lg",
  levelBasic: "bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-cyan-400 border-cyan-400/50 shadow-cyan-500/50",
  levelIntermediate:
    "bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-violet-400 border-violet-400/50 shadow-violet-500/50",
  levelAdvanced:
    "bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30 text-fuchsia-400 border-fuchsia-400/50 shadow-fuchsia-500/50",
  cardText: "min-w-0",
  cardTitle: "text-sm md:text-base lg:text-sm font-medium truncate text-cyan-100",
  cardMeta: "text-xs md:text-sm lg:text-xs text-cyan-200/70",

  // Card performance
  cardPerformance: "text-right",
  performanceLabel: "text-md md:text-md lg:text-md text-cyan-200/70",
  badgeContainer: "mt-1",

  // Card stats
  cardStats: "mt-4",
  statItem: "text-md md:text-md lg:text-md text-cyan-200/70",
  statNumber: "font-semibold text-lg md:text-xl lg:text-lg text-cyan-400",
  deleteButton: `
    absolute bottom-3 right-3 
    p-2 rounded-xl 
    bg-gradient-to-r from-rose-500/30 to-pink-500/30 text-rose-400 
    hover:from-rose-500/50 hover:to-pink-500/50
    transition-all duration-200
    text-sm
    cursor-pointer
    border border-rose-400/50
    outline-none
    z-10
    shadow-lg shadow-rose-500/50
    hover:shadow-xl hover:shadow-rose-500/70
  `,

  // Summary section
  summaryContainer: "mt-4 p-4 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30",
  summaryTitle: "font-semibold text-cyan-100 mb-3 text-center",
  summaryGrid: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center",
  summaryItem: "bg-slate-950/70 backdrop-blur-sm p-3 rounded-xl shadow-lg shadow-cyan-500/20 border border-cyan-500/30",
  summaryNumber: "text-xl font-bold",
  summaryLabel: "text-xs mt-1",
  summaryNumberBlue: "text-xl font-bold text-cyan-400",
  summaryNumberGreen: "text-xl font-bold text-emerald-400",
  summaryNumberRed: "text-xl font-bold text-rose-400",
  summaryNumberPurple: "text-xl font-bold text-violet-400",
  summaryLabelBlue: "text-xs text-cyan-400 mt-1",
  summaryLabelGreen: "text-xs text-emerald-400 mt-1",
  summaryLabelRed: "text-xs text-rose-400 mt-1",
  summaryLabelPurple: "text-xs text-violet-400 mt-1",
}
 



// Sophisticated design with premium materials, subtle animations, and refined color palette

