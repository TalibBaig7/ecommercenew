// src/services/mockAuthService.js
// Mock Authentication Service - No Backend Required

const USERS_KEY = "shop_co_users";
const CURRENT_USER_KEY = "shop_co_current_user";
const AUTH_TOKEN_KEY = "token";

// Initialize mock users storage
const initializeStorage = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
  }
};

// Simulate API delay
const simulateDelay = (ms = 800) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Get all registered users
const getUsers = () => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
};

// Save users to storage
const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Mock Signup Function
export const mockSignup = async (username, email, password) => {
  await simulateDelay();

  const users = getUsers();

  // Check if user already exists
  const userExists = users.some(
    (user) => user.email === email || user.username === username
  );

  if (userExists) {
    throw new Error("User with this email or username already exists!");
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password, // In real app, this would be hashed
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return {
    message: "Signup successful! Please login.",
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    },
  };
};

// Mock Login Function
export const mockLogin = async (email, password) => {
  await simulateDelay();

  const users = getUsers();

  // Find user
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid email or password!");
  }

  // Generate mock token
  const token = `mock_token_${user.id}_${Date.now()}`;

  // Store auth data
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem("username", user.username);
  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({
      id: user.id,
      username: user.username,
      email: user.email,
    })
  );

  return {
    message: "Login successful!",
    token,
    username: user.username,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  };
};

// Mock Logout Function
export const mockLogout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem("username");
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
};

// Get current user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

// Clear all auth data (for testing)
export const clearAllAuthData = () => {
  localStorage.removeItem(USERS_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem("username");
};
