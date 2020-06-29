import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
    children,
    title = 'This is the default title',
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
          |
          <Link href="/somos">
                        <a>About</a>
                    </Link>{' '}
          |
          <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </nav>
            </header>

            {children}

            <footer>{'I`m here to stay'}</footer>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </div>
    )
}