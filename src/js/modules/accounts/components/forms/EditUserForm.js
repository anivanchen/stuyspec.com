import React from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import injectSheet from "react-jss";
import Table from "react-bootstrap/lib/Table";
import { EMAIL_REGEX } from "../../../../constants";

import FormStatus from "./FormStatus";

const styles = {
  dataTable: {
    "& .table-responsive table > tbody > tr > td": {
      fontFamily: "Minion Pro",
      fontSize: "17px",
      padding: "8px 0",
    },
    "& .table-responsive table > tbody > tr > td:first-child": {
      paddingRight: "12px",
      width: "120px",
    },
  },
  saveButton: {
    backgroundColor: "#3472b7",
    border: "1px solid #3472b7",
    borderRadius: "3px",
    color: "#fff",
    fontFamily: "Minion Pro",
    fontSize: "15px",
    fontStyle: "italic",
    height: "32px",
    marginTop: "15px",
    textAlign: "center",
    width: "85px",
  },
};

const validate = formValues => {
  const errors = {};
  if (formValues.email && !EMAIL_REGEX.test(formValues.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          style={{ width: "100%" }}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const EditUserForm = ({ classes, handleSubmit, submitting }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.dataTable}>
          <Table responsive>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    label="First Name"
                  />
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <Field
                    name="lastName"
                    type="text"
                    component={renderField}
                    label="Last Name"
                  />
                </td>
              </tr>
              <tr>
                <td>E-mail Address</td>
                <td>
                  <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label="Email"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <button
            type="submit"
            disabled={submitting}
            className={classes.saveButton}
          >
            Save
          </button>
        </div>
      </form>
      <FormStatus formName="editUser" />
    </div>
  );
};

export default compose(
  reduxForm({
    form: "editUser",
    validate,
  }),
  injectSheet(styles),
)(EditUserForm);
