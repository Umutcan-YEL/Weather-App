import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Demo from "./Demo";
import { Col, Row } from "antd";
import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
         <Demo/>
        </Col>
        <Col className="gutter-row" span={8}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={24}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
    </QueryClientProvider>
  );
}

export default App;
