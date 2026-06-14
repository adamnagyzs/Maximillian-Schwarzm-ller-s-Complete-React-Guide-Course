import { useActionState } from "react";

function signupAction(prevFormState, formData) {
  const userName = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");

  const errors = {
    userNameError: null,
    titleError: null,
    bodyError: null,
  };

  if (!userName || userName.length < 5 || userName.length > 16) {
    errors.userNameError = "Please enter a username between 5-16 characters";
  }

  if (!title || title.trim().length === 0) {
    errors.titleError = "Please enter a title";
  }

  if (!body || body.trim().length === 0) {
    errors.bodyError = "Please enter your opinion";
  }

  if (errors.userNameError || errors.titleError || errors.bodyError) {
    return {
      errors,
      enteredValues: { userName, title, body },
    };
  }

  return {
    errors: null,
    enteredValues: { userName: "", title: "", body: "" },
  };
}

export function NewOpinion() {
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
            {formState.errors?.userNameError && (
              <div className="errors">{formState.errors.userNameError}</div>
            )}
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
            {formState.errors?.titleError && (
              <div className="errors">{formState.errors.titleError}</div>
            )}
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
          {formState.errors?.bodyError && (
            <div className="errors">{formState.errors.bodyError}</div>
          )}
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
