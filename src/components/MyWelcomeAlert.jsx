import Alert from "react-bootstrap/Alert";

function WelcomeAlert() {
  return (
    <>
      <Alert key={"success"} variant={"success"} className="text-center fw-bold display-6 my-3">
        Welcome { name || "Utente"} in our E-Books App
      </Alert>
    </>
  );
}

export default WelcomeAlert;
