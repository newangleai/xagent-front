import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">X Agent</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#recursos" className="hover:text-gray-300">Recursos</Link>
          <Link href="#precos" className="hover:text-gray-300">Preços</Link>
          <Link href="#documentacao" className="hover:text-gray-300">Documentação</Link>
          <Link href="#contato" className="hover:text-gray-300">Contato</Link>
        </nav>
        <div className="flex space-x-4 items-center">
          <Link href="/login" className="hover:text-gray-300 px-4 py-2">Entrar</Link>
          <Link 
            href="/signup" 
            className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Começar
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Crie Agentes de IA<br />
          <span className="text-gray-500">Sob Demanda</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Transforme suas ideias em agentes inteligentes com apenas um prompt. A
          plataforma mais avançada para geração automática de IA personalizada.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/criar-agente" 
            className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <span>🚀</span> Criar Meu Agente
          </Link>
          <Link 
            href="/demo" 
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <span>▶</span> Ver Demo
          </Link>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="bg-[#0f1117] py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl mb-16">Três passos simples para seu agente personalizado</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#1a1f2e] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">1. Descreva seu Agente</h3>
              <p className="text-gray-400">
                Digite um prompt detalhado descrevendo as funcionalidades e
                comportamentos desejados para seu agente de IA.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-[#1a1f2e] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">2. IA Processa e Gera</h3>
              <p className="text-gray-400">
                Nossa plataforma analisa seu prompt e
                gera automaticamente um agente personalizado com as capacidades
                solicitadas.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-[#1a1f2e] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">3. Deploy Instantâneo</h3>
              <p className="text-gray-400">
                Seu agente fica pronto para uso imediatamente, com APIs e interfaces
                prontas para integração.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstração Section */}
      <section className="container mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Veja a Magia Acontecer</h2>
            <p className="text-xl mb-6">
              Assista como um simples prompt se transforma em um agente inteligente completo em
              segundos.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Processamento de linguagem natural avançado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Integração com APIs externas automatizada
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Interface personalizada gerada automaticamente
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-[#111827] p-6 rounded-lg">
            <div className="bg-[#1a1f2e] p-4 rounded-md mb-4">
              <p className="text-sm text-gray-400 mb-2">Seu Prompt:</p>
              <p className="text-white">"Crie um agente que analisa sentimentos em redes sociais e gera relatórios automáticos..."</p>
            </div>
            <div className="flex justify-center">
              <span className="text-2xl">⬇️</span>
            </div>
            <div className="bg-[#1a1f2e] p-4 rounded-md mt-4">
              <p className="text-sm text-gray-400 mb-2">Agente Gerado:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Social Sentiment Analyzer
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API endpoints criados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Dashboard interativo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Relatórios automatizados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preços Section */}
      <section id="precos" className="bg-[#0f1117] py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Preços Simples</h2>
          <p className="text-gray-400 mb-12">Escolha o plano ideal para suas necessidades</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plano Starter */}
            <div className="bg-[#1a1f2e] rounded-lg p-6 flex flex-col h-full text-left">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <p className="text-3xl font-bold mb-1">R$29<span className="text-sm font-normal">/mês</span></p>
              <p className="text-gray-400 mb-6">5 agentes por mês</p>
              <ul className="text-left space-y-2 mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Suporte básico
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API incluída
                </li>
              </ul>
              <Link 
                href="/signup" 
                className="mt-auto block w-full py-2 px-4 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors text-center"
              >
                Começar Agora
              </Link>
            </div>
            
            {/* Plano Pro */}
            <div className="bg-[#1a1f2e] rounded-lg p-6 flex flex-col h-full border-2 border-blue-500 relative text-left">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-1">R$99<span className="text-sm font-normal">/mês</span></p>
              <p className="text-gray-400 mb-6">20 agentes por mês</p>
              <ul className="text-left space-y-2 mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Suporte prioritário
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API avançada
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Integrações
                </li>
              </ul>
              <Link 
                href="/signup" 
                className="mt-auto block w-full py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors text-center"
              >
                Começar Agora
              </Link>
            </div>
            
            {/* Plano Enterprise */}
            <div className="bg-[#1a1f2e] rounded-lg p-6 flex flex-col h-full text-left">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-1">Custom</p>
              <p className="text-gray-400 mb-6">Agentes ilimitados</p>
              <ul className="text-left space-y-2 mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Suporte dedicado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API personalizada
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Integrações avançadas
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="mt-auto block w-full py-2 px-4 border border-white text-white rounded font-medium hover:bg-white/10 transition-colors text-center"
              >
                Falar com Vendas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para Criar seu Primeiro Agente?</h2>
        <p className="text-xl mb-8">Junte-se a milhares de desenvolvedores que já estão criando o futuro com X Agent</p>
        <Link 
          href="/signup" 
          className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
        >
          Começar Gratuitamente
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1117] py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">X Agent</h3>
              <p className="text-gray-400 text-sm">A plataforma líder mundial para criação de agentes de IA personalizados.</p>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Recursos</Link></li>
                <li><Link href="#" className="hover:text-white">Preços</Link></li>
                <li><Link href="#" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Documentação</Link></li>
                <li><Link href="#" className="hover:text-white">Contato</Link></li>
                <li><Link href="#" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Sobre</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Carreiras</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 X Agent. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
