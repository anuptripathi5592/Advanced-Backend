\# Advanced-Backend



A backend development practice project built using Node.js, Express.js, React, Vite, and Docker.



\## Technologies Used



\- Node.js

\- Express.js

\- React

\- Vite

\- Docker



\## Project Structure



```text

Advanced-Backend/

├── phase1/          # Backend project

└── phase2/

&#x20;   ├── backend/     # Express API

&#x20;   ├── frontend/    # React + Vite UI

&#x20;   └── docker-compose.yml

```



\## Phase 1 — Run Backend



Open a terminal in the Phase 1 backend folder, install dependencies, and start the server:



```bash

npm install

node index.js

```



Use the port configured in the Phase 1 `index.js`.



\## Phase 2 — Run Backend



Open a terminal in the `phase2/backend` folder:



```bash

npm install

node index.js

```



The Phase 2 API runs at:



http://127.0.0.1:7001/



\## Phase 2 — Run Frontend



Open another terminal in the `phase2/frontend` folder:



```bash

npm install

npm run dev

```



Open the local URL shown in the terminal, usually `http://localhost:5173` or another available Vite port.



\## API Response



The Phase 2 API returns a JSON response similar to:



```json

{

&#x20; "message": "hello from docker phase 2",

&#x20; "status": "success",

&#x20; "project": "Advanced Backend"

}

```



\## Docker



Docker configuration files are included for the backend and frontend, along with a `docker-compose.yml` file for Phase 2.



\## Author



Anup Tripathi



