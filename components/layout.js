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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0 m-0">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="/">CONCRETON</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <Link href="/somos">
                                    <a>Home</a>
                                </Link>{' '}
                            </nav>
                        </div>

                    </div>
                </div>
            </header>

            {children}

            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0 m-0">
                            <p className="p-3 m-0">® 2020 Instituto Mexicano del Cemento y del Concreto A.C.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </div>
    )
}