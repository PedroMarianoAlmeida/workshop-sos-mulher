import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SOS Mulher</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Saia do piloto automático e reassuma o controle de suas emoções" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Ruda:wght@900&display=swap" rel="stylesheet" />
      </Head>

      <main className='text-base text-center text-primary font-bold p-3' style={{ fontFamily: 'Ruda' }}>
        <div className='text-sm'>
          <h1 className='text-5xl text-secondary my-3' style={{ fontFamily: 'Parisienne' }}>Workshop S.O.S. Mulher</h1>
          <div className='my-6'>
            <h2 className='text-lg my-3'>Saia do pioto automático e <span className='text-xl'>reassuma o controle de suas ações</span></h2>
            <p className='my-3'>Você está cansada de vivier perdida, em meio tantas demandas do dia a dia?</p>
            <p className='my-3'>Se vê frustrada e sem ferramentas para mudar essa realidade?</p>
            <p className='my-3'>Sente que os momentos de conflito são maiores que os momentos de alegria?</p>

            <p className='text-lg my-3 text-black'>Então o S.O.S. MULHER é para você</p>
          </div>

          <div className='my-6'>
            <h2 className='text-3xl my-3 text-secondary' style={{ fontFamily: 'Parisienne' }}>Dia 01/03 - 20h</h2>
            <p>Ao clicar no link você será direcionada para o nosso grupo de comunicados exclusivo do Workshop S.O.S. Mulher</p>

            <button className='border-2 p-4 my-2 text-3xl bg-primary text-white border-secondary'>Quero garantir minha vaga</button>
          </div>

          <div className='my-6'>
            <h2 className='text-3xl my-3 text-secondary' style={{ fontFamily: 'Parisienne' }}>O que é o S.O.S. mulher?</h2>
            <p className='my-3'>É um evento 100% online e 100% gratuito que vai te ensinar a desvendar as armadilhas que nos permitimos cair, nos levando a uma vida de desequilíbrio emocional e frustrações e a encontrar a solução mais assertiva para cada situação, voltando a ter a tranquilidade na sua casa, enquanto zela pelo respeito e pela relação de vocês</p>
          </div>

          <div className='my-6'>
            <h2 className='text-3xl my-3 text-secondary' style={{ fontFamily: 'Parisienne' }}>Ao final do S.O.S. Mulher você irá</h2>

            <div className='my-3 text-left flex'>

              <div className='w-1/2 mx-2 align-middle inline'>
                <svg className='h-4 inline' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className='h-full inline'>Entender que você não é, e não precisa ser a Mulher Maravilha</p>
              </div>

              <div className='w-1/2 mx-2 align-middle inline'>
                <svg className='h-4 inline' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className='h-full inline'>Descobrir quais as armadilhas emocionais nos são impostas desde a infância</p>
              </div>

              <div className='w-1/2 mx-2 align-middle inline'>
                <svg className='h-4 inline' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className='h-full inline'>Conhecer ferramentas para agir com empatia e firmeza nas mais diversas situações do dia-a-dia</p>
              </div>

              <div className='w-1/2 mx-2 align-middle inline'>
                <svg className='h-4 inline' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className='h-full inline'>Conquistar a tranquilidade na sua casa, verdadeiramente aproveitando os momentos em família</p>
              </div>


            </div>

            <button className='border-2 p-4 my-2 text-3xl bg-primary text-white border-secondary'>Quero garantir minha vaga</button>
          </div>

          <div>
            <h2 className='text-3xl my-3 text-secondary' style={{ fontFamily: 'Parisienne' }}>Conheça a sua mentora</h2>
            <p className='my-3'>Muito prazer eu me chamo Maria Regina Fronza, meus amigos me chamam de Marrê... Sinta-se a vontade!</p>
            <p className='my-3'>Sou pedagoga, educadora emocional e mais um monte de coisa que não tem a menor importância. Sério mesmo!</p>
            <p className='my-3'>O que vale aqui, é dizer que:</p>
            <p className='my-3'>Durante anos levei uma vida de zumbi, e os dias passavam que nem me dava conta... Cada vez mais atribulada estava vendo tudo o que era importante pra mim indo por água abaixo</p>
            <p className='my-3'>Instisfeita resolvi assumir o controle da minha vida e das minhas emoções...tomei como meta antes de qualquer coisa ser uma mulher de fato. Com minhas fragilidades, limitações, exessos, feminina, mas também profissional bem sucedida sim, esposa e dona de casa também... Por que não!</p>
            <p className='my-3'>Eu criei esse programa exclusivo para um grupo de mulheres que topam viver toda essa experiência</p>
            <p className='my-3 text-lg text-black'>Vai ficar de fora?</p>
            <button className='border-2 p-4 my-2 text-3xl bg-primary text-white border-secondary'>Quero garantir minha vaga</button>
          </div>
        </div>
      </main>
    </div>
  )
}
