import Head from 'next/head';

export default ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='image' content='initial-scale=1.0, width=device-width' />
        </Head>
    );
}
