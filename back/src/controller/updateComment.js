import express from 'express';

import Comment from '../models/CommentModel';

const api = express.Router();

// POST
// Update un commentaire d'un article
// route /app/blog/:id/comment/:commentid/
// ============================
api.post('/:id/comment/:commentid', ( req, res ) => {
  Comment.findByIdAndUpdate(req.params.commentid, req.body, (err, updateComment) => {
    if (err) return res.send(err);
    res.json({ success : `Comment updated` })
  });
});

export default api;
