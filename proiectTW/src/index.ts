import express, { Application } from 'express';
import expressRoutesUpload from './posts/routes';
import fileUpLoad from 'express-fileupload';
import cors from 'cors';
require('dotenv').config();
export const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpLoad());
// allow all origins
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.static(__dirname + '/../public'));

app.use(expressRoutesUpload);

const PORT = process.env.NODE_DOCKER_PORT || 8080;

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error) {
  console.error(`Error occured,`, error);
}
