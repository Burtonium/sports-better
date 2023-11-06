import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react"

import Layout from "~/components/layout/Layout";
import LoginForm from "~/components/forms/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sports Better</title>
        <meta name="description" content="Sports betting app template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Login;
