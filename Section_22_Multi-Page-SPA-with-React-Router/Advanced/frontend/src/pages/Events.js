import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  // this executes in the browser, not in backend server
  // you can't use hooks here, because it isn't a react component, but any other browser features can be used
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response; // you can do it like this with useLoaderData()
  }
}
