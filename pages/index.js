import Layout from '../components/layout';

function Home({ stars }) {
  return (
    <Layout title="CONCRETON Problemas. Causas y Soluciones del concreto en obra">
      <main className="mt-5 mb-5">
        <div className="container-fluid" style={{ overflow: 'auto' }}>
          <div className="row flex-row flex-nowrap">
            {stars.map((post) => (
              <div className="col-2" key={post.id}>
                <div className="card card-block">
                  <img src={`http://redcyc.com/imcyc/concreton/${post.ano}/${post.imagen}`} />
                  {post.norma} - {post.volumen} - {post.ano}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://concreton.com.mx/api/api.php')
  const json = await res.json()
  return { stars: json.Numeros }
}

export default Home;
