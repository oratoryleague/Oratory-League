import { Router } from 'express';
import passport from 'passport';
import { AuthService } from '../services/auth';
import { isAuthenticated } from '../middleware/auth';

const router = Router();

// Register route
router.post('/register', async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json({ message: 'Registration successful', user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({ message: 'Login successful', user });
    });
  })(req, res, next);
});

// Logout route
router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logout successful' });
  });
});

// Get current user
router.get('/me', isAuthenticated, (req, res) => {
  res.json(req.user);
});

export default router; 