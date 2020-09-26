import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {FormattedMessage, injectIntl} from 'react-intl';
import * as auth from '../_redux/authRedux';
import {login} from '../_redux/authCrud';

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  username: 'demo1',
  password: 'Tandan123',
};

function Login(props) {
  const {intl} = props;
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required(
        intl.formatMessage({
          id: 'AUTH.VALIDATION.REQUIRED_FIELD',
        }),
      ),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required(
        intl.formatMessage({
          id: 'AUTH.VALIDATION.REQUIRED_FIELD',
        }),
      ),
  });

  const SignInSSO = () => {
    console.log('sso');
    window.open(`${process.env.REACT_APP_SSO_LOGIN}`, '_self');
  };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return 'is-invalid';
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return 'is-valid';
    }

    return '';
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      console.log(values);
      enableLoading();
      await login(values.username, values.password)
        //.then(({data: {accessToken}}) => {
        .then(data => {
          let authToken = data.data.token.accessToken;
          let refreshToken = data.data.token.refreshToken;
          let user = data.data.user;
          disableLoading();
          props.login({authToken, refreshToken, user});
        })
        .catch(() => {
          disableLoading();
          setSubmitting(false);
          setStatus(
            intl.formatMessage({
              id: 'AUTH.VALIDATION.INVALID_LOGIN',
            }),
          );
        });
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          <FormattedMessage id="AUTH.LOGIN.SUBTITLE" />
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form onSubmit={formik.handleSubmit} className="form fv-plugins-bootstrap fv-plugins-framework">
        {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <></>
        )}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Username"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses('username')}`}
            name="username"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.username}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses('password')}`}
            name="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <button
            id="kt_login_signin_SSO_submit"
            type="button"
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
            onClick={() => {
              SignInSSO();
            }}>
            <span>
              <FormattedMessage id="AUTH.LOGINSSO.BUTTON" />
            </span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}>
            <span>
              <FormattedMessage id="AUTH.LOGIN.BUTTON" />
            </span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
