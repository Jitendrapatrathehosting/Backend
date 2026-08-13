const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Backend API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "🎉 Node.js backend is working on Render!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
