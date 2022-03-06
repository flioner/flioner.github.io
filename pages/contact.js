import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import React, { Component, useState } from "react";
import Modal from "react-awesome-modal";
import utilStyles from "../styles/utils.module.css";
import { Socials, BottomName } from "../components/socials";
import { useForm, ValidationError } from "@formspree/react";

export default function FirstPost() {
  const [state, handleSubmit] = useForm("xknyjzze");
  const [sub, setSub] = useState(false);

  const handleSub = () => {
    setSub(true);
  };
  const subOff = () => {
    setSub(false);
  };

  if (state.succeeded && sub) {
    return (
      <Layout>
        <Head>
          <title>Fabian Lioner - Contact</title>
          <meta
            name="Fabian Lioner - Contact"
            content="If you need any photography or video work done, feel free to hit me up, write an email or message me on social media!"
          />
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
              onClick={handleSub}
            >
              Submit
            </button>
            <Modal
              visible={true}
              width="400"
              height="200"
              effect="fadeInUp"
              onClickAway={() => subOff()}
            >
              <div className={utilStyles.popUp}>
                <div className={utilStyles.popUpMainText}>Message Sent</div>
                <div className={utilStyles.break} />
                <div className={utilStyles.popUpSecText}>
                  I'll reply as soon as possible!
                </div>
                <div className={utilStyles.break} />
                <div
                  className={utilStyles.popUpThiText}
                  onClick={() => subOff()}
                >
                  Close
                </div>
              </div>
            </Modal>
          </form>

          <Socials className={utilStyles.seventyFive} />
        </div>
      </Layout>
    );
  }

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
            onClick={handleSub}
          >
            Submit
          </button>
        </form>

        <Socials className={utilStyles.seventyFive} />
      </div>
    </Layout>
  );
}

//<Socials />;
