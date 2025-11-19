import express from 'express';
import { getDb } from '../database.js';

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ status: 'success', message: 'Backend API is working!' });
});

// Users CRUD
router.get('/users', async (req, res) => {
  try {
    const db = await getDb();
    const users = await db.all('SELECT * FROM users ORDER BY created_at DESC');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/users', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const db = await getDb();
    const result = await db.run(
      'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone]
    );
    res.json({ id: result.lastID, name, email, phone });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const db = await getDb();
    await db.run('DELETE FROM users WHERE id = ?', [req.params.id]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Messages CRUD
router.get('/messages', async (req, res) => {
  try {
    const db = await getDb();
    const messages = await db.all('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/messages', async (req, res) => {
  try {
    const { name, email, phone, program, message } = req.body;
    const db = await getDb();
    const result = await db.run(
      'INSERT INTO messages (name, email, phone, program, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, program, message]
    );
    res.json({ id: result.lastID, name, email, phone, program, message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Certificates CRUD
router.get('/certificates', async (req, res) => {
  try {
    const db = await getDb();
    const certificates = await db.all('SELECT * FROM certificates ORDER BY created_at DESC');
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/certificates/:certificateId', async (req, res) => {
  try {
    const db = await getDb();
    const certificate = await db.get(
      'SELECT * FROM certificates WHERE certificate_id = ?',
      [req.params.certificateId]
    );
    if (certificate) {
      res.json(certificate);
    } else {
      res.status(404).json({ error: 'Certificate not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/certificates', async (req, res) => {
  try {
    const { certificate_id, student_name, course_name, issue_date } = req.body;
    const db = await getDb();
    const result = await db.run(
      'INSERT INTO certificates (certificate_id, student_name, course_name, issue_date) VALUES (?, ?, ?, ?)',
      [certificate_id, student_name, course_name, issue_date]
    );
    res.json({ id: result.lastID, certificate_id, student_name, course_name, issue_date });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/certificates/:id', async (req, res) => {
  try {
    const db = await getDb();
    await db.run('DELETE FROM certificates WHERE id = ?', [req.params.id]);
    res.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Internships CRUD
router.get('/internships', async (req, res) => {
  try {
    const db = await getDb();
    const internships = await db.all('SELECT * FROM internships ORDER BY created_at DESC');
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/internships', async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    const db = await getDb();
    const result = await db.run(
      'INSERT INTO internships (title, description, duration) VALUES (?, ?, ?)',
      [title, description, duration]
    );
    res.json({ id: result.lastID, title, description, duration });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/internships/:id', async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    const db = await getDb();
    await db.run(
      'UPDATE internships SET title = ?, description = ?, duration = ? WHERE id = ?',
      [title, description, duration, req.params.id]
    );
    res.json({ id: req.params.id, title, description, duration });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/internships/:id', async (req, res) => {
  try {
    const db = await getDb();
    await db.run('DELETE FROM internships WHERE id = ?', [req.params.id]);
    res.json({ message: 'Internship deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Settings CRUD
router.get('/settings', async (req, res) => {
  try {
    const db = await getDb();
    const settings = await db.all('SELECT * FROM settings');
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/settings', async (req, res) => {
  try {
    const { key, value } = req.body;
    const db = await getDb();
    await db.run(
      'INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)',
      [key, value]
    );
    res.json({ key, value });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
