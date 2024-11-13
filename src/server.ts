import app from "./app";
import "dotenv";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT} , Swagger - http://localhost:${PORT}/swagger/index.html`));
