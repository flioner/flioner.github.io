import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import React from "react";
import utilStyles from "../styles/utils.module.css";
import Socials from "../components/socials";
import { useForm, ValidationError } from "@formspree/react";

export default function FirstPost() {
  const [state, handleSubmit] = useForm("xknyjzze");
  /*if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  } */
  return (
    <Layout>
      <Head>
        <title>Fabian Lioner - Contact</title>
      </Head>
      <div className={utilStyles.contContContainer}>
        <div className={utilStyles.menu2}>
          <div className={utilStyles.menu5}>Contact</div>
          <div className={utilStyles.menu3}>
            <Link href="/">Homepage</Link>
            <Link href="about-me">About Me</Link>
          </div>
        </div>

        <form className={utilStyles.formContainer} onSubmit={handleSubmit}>
          <label className={utilStyles.email} htmlFor="email">
            Email Address
          </label>
          <div className={utilStyles.break} />
          <input
            className={utilStyles.emailBox}
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className={utilStyles.break} />
          <label className={utilStyles.email} htmlFor="message">
            Message
          </label>
          <div className={utilStyles.break} />
          <textarea
            className={utilStyles.messageBox}
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className={utilStyles.break2} />

          <button
            type="submit"
            disabled={state.submitting}
            className={utilStyles.submit}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

//<Socials />;
