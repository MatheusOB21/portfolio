import profileImage from "@/assets/profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
          Sobre Mim
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={profileImage} 
              alt="Foto de perfil" 
              className="rounded-2xl shadow-card w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground">
              Olá! Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. 
              Com X anos de experiência em desenvolvimento web, tenho expertise em transformar 
              conceitos complexos em interfaces intuitivas e funcionais.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Minha jornada na tecnologia começou [insira sua história aqui]. Desde então, 
              venho constantemente aprimorando minhas habilidades e me mantendo atualizado 
              com as últimas tendências do mercado.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Quando não estou codificando, gosto de [seus hobbies aqui]. Acredito que o 
              equilíbrio entre trabalho e vida pessoal é essencial para manter a criatividade 
              e produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
