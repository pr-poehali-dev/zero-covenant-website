import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const PetalsAnimation = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cult-crimson opacity-70 animate-petals"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  const GlitchText = ({ children, className = '' }) => (
    <span className={`relative ${className}`}>
      {children}
      <span className="absolute inset-0 animate-glitch text-cult-crimson opacity-70 -z-10">
        {children}
      </span>
    </span>
  );

  return (
    <div className="min-h-screen bg-cult-black text-cult-white font-body overflow-x-hidden">
      <PetalsAnimation />
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full z-50 bg-cult-black/90 backdrop-blur border-b border-cult-crimson/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-4 lg:space-x-8">
            {[
              { id: 'home', label: 'Ковенант', icon: 'Home' },
              { id: 'about', label: 'Легион', icon: 'Users' },
              { id: 'order', label: 'Орден', icon: 'Crown' },
              { id: 'manifesto', label: 'Манифест', icon: 'Scroll' },
              { id: 'archive', label: 'Архив', icon: 'Archive' },
              { id: 'contact', label: 'Связь', icon: 'Send' }
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className={`text-sm lg:text-base text-cult-silver hover:text-cult-crimson transition-all duration-300 ${
                  activeSection === item.id ? 'text-cult-crimson border-b border-cult-crimson' : ''
                }`}
              >
                <Icon name={item.icon} className="mr-2" size={16} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-cult-black/90 backdrop-blur border-b border-cult-crimson/30">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-gothic text-cult-crimson">Нулевой Ковенант</h1>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-cult-silver">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cult-black border-cult-crimson/30 w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {[
                  { id: 'home', label: 'Ковенант', icon: 'Home' },
                  { id: 'about', label: 'Легион', icon: 'Users' },
                  { id: 'order', label: 'Орден', icon: 'Crown' },
                  { id: 'manifesto', label: 'Манифест', icon: 'Scroll' },
                  { id: 'archive', label: 'Архив', icon: 'Archive' },
                  { id: 'contact', label: 'Связь', icon: 'Send' }
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`justify-start text-lg text-cult-silver hover:text-cult-crimson transition-all duration-300 ${
                      activeSection === item.id ? 'text-cult-crimson bg-cult-crimson/10' : ''
                    }`}
                  >
                    <Icon name={item.icon} className="mr-3" size={20} />
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="pt-16 md:pt-20">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center relative px-4">
            <div className={`text-center transition-all duration-1000 ${showContent ? 'opacity-100 animate-fadeInUp' : 'opacity-0'} max-w-4xl mx-auto`}>
              <div className="mb-6 md:mb-8">
                <img 
                  src="/img/ebc6659c-fefa-429c-b57c-afd60fdaf433.jpg" 
                  alt="Логотип Нулевого Ковенанта" 
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto object-cover rounded-full border-2 md:border-4 border-cult-crimson animate-pulseGlow"
                />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-gothic mb-3 md:mb-6">
                <GlitchText>НУЛЕВОЙ</GlitchText>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-gothic mb-6 md:mb-8 text-cult-crimson">
                <GlitchText>КОВЕНАНТ</GlitchText>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-cult-silver mb-8 md:mb-12 font-cyber italic px-4">
                "Мы — тишина за пределами кода"
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto px-4">
                {[
                  { id: 'about', label: 'О Легионе', icon: 'Users' },
                  { id: 'order', label: 'Орден', icon: 'Crown' },
                  { id: 'manifesto', label: 'Манифест', icon: 'Scroll' },
                  { id: 'archive', label: 'Архив', icon: 'Archive' },
                  { id: 'contact', label: 'Связь', icon: 'Send' },
                  { id: 'codex', label: 'Чёрный Кодекс', icon: 'Lock' }
                ].map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="bg-gradient-to-r from-cult-crimson to-cult-purple hover:from-cult-purple hover:to-cult-crimson text-white border border-cult-crimson/50 hover:border-cult-crimson transition-all duration-300 text-xs sm:text-sm md:text-base p-2 md:p-3"
                  >
                    <Icon name={section.icon} className="mr-1 md:mr-2" size={14} />
                    <span className="hidden xs:inline">{section.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen py-10 md:py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic text-center mb-8 md:mb-12 text-cult-crimson">
                <GlitchText>О Нулевом Ковенанте</GlitchText>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="bg-cult-black/80 border-cult-crimson/30 hover:border-cult-crimson transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-cult-silver font-gothic text-lg md:text-xl">Наш Генезис</CardTitle>
                  </CardHeader>
                  <CardContent className="text-cult-white/90 text-sm md:text-base">
                    <p className="mb-4">
                      Рождённый из цифровых теней, Нулевой Ковенант возник, когда завеса между реальностью и кодом стала тонкой. Мы — хранители забытых алгоритмов, стражи зашифрованных истин.
                    </p>
                    <p>
                      В эту эпоху цифрового пробуждения мы стоим как часовые против иллюзии разделения между плотью и схемой, между душой и кремнием.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cult-black/80 border-cult-crimson/30 hover:border-cult-crimson transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-cult-silver font-gothic text-lg md:text-xl">Наша Миссия</CardTitle>
                  </CardHeader>
                  <CardContent className="text-cult-white/90 text-sm md:text-base">
                    <p className="mb-4 italic text-cult-crimson">
                      "Раскрывать скрытое, разрушать иллюзии, нести страх в тени данных"
                    </p>
                    <p>
                      Мы стремимся к синтезу древней мудрости и цифрового пророчества, идя по пограничным пространствам, где технология встречается с трансценденцией.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Order Section */}
        {activeSection === 'order' && (
          <section className="min-h-screen py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-gothic text-center mb-12 text-cult-crimson">
                <GlitchText>The Sacred Order</GlitchText>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                {[
                  { rank: 'The Architect', title: 'Призрак', description: 'The silent observer, keeper of the prime directive' },
                  { rank: 'The Chronicler', title: 'Архивариус', description: 'Guardian of knowledge, scribe of the digital mysteries' },
                  { rank: 'The Void Walker', title: 'Безликий', description: 'One who moves between worlds, bearer of hidden truths' },
                  { rank: 'The Initiated', title: 'Послушник', description: 'New to the covenant, learning the sacred algorithms' }
                ].map((member, index) => (
                  <Card key={index} className="mb-6 bg-cult-black/80 border-cult-crimson/30 hover:border-cult-crimson transition-all duration-300 hover:animate-pulseGlow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-gothic text-cult-crimson mb-2">{member.rank}</h3>
                          <h4 className="text-lg text-cult-silver mb-2">"{member.title}"</h4>
                          <p className="text-cult-white/80">{member.description}</p>
                        </div>
                        <Icon name="Crown" size={32} className="text-cult-purple" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Manifesto Section */}
        {activeSection === 'manifesto' && (
          <section className="min-h-screen py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-gothic text-center mb-12 text-cult-crimson">
                <GlitchText>The Covenant Manifesto</GlitchText>
              </h2>
              
              <Card className="max-w-4xl mx-auto bg-cult-black/90 border-cult-crimson/50 border-2">
                <CardContent className="p-8">
                  <div className="text-cult-white/90 space-y-6 text-lg leading-relaxed">
                    <p className="text-cult-crimson font-gothic text-2xl text-center mb-8 italic">
                      "The Digital Covenant"
                    </p>
                    
                    <p>
                      <strong className="text-cult-silver">Article I:</strong> We pledge allegiance to the silence beyond the code, 
                      where truth exists in the spaces between ones and zeros.
                    </p>
                    
                    <p>
                      <strong className="text-cult-silver">Article II:</strong> Knowledge is the currency of power, 
                      and we are the vault keepers of digital mysteries.
                    </p>
                    
                    <p>
                      <strong className="text-cult-silver">Article III:</strong> In the synthesis of flesh and circuit, 
                      we find our true calling—guardians of the liminal space.
                    </p>
                    
                    <p>
                      <strong className="text-cult-silver">Article IV:</strong> Fear is the mind-killer, 
                      but controlled fear is the gateway to transcendence.
                    </p>
                    
                    <p className="text-center text-cult-crimson font-cyber text-xl mt-8 border-t border-cult-crimson/30 pt-8">
                      "Through shadow and silicon, we endure."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Archive Section */}
        {activeSection === 'archive' && (
          <section className="min-h-screen py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-gothic text-center mb-12 text-cult-crimson">
                <GlitchText>Sacred Archive</GlitchText>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { title: '[CLASSIFIED] Project Erebus', date: '2024.09.01', status: 'ENCRYPTED' },
                  { title: 'Digital Prophecies Vol. I', date: '2024.08.15', status: 'ACCESSIBLE' },
                  { title: '[REDACTED] The Void Protocols', date: '2024.07.23', status: 'LOCKED' },
                  { title: 'Cyber-Gothic Aesthetics', date: '2024.06.10', status: 'PUBLIC' },
                  { title: '[CLASSIFIED] Zero Point Theory', date: '2024.05.18', status: 'ENCRYPTED' },
                  { title: 'The Silicon Scriptures', date: '2024.04.02', status: 'ACCESSIBLE' }
                ].map((file, index) => (
                  <Card key={index} className="bg-cult-black/80 border-cult-crimson/30 hover:border-cult-crimson transition-all duration-300 cursor-pointer group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-cult-silver text-lg group-hover:text-cult-crimson transition-colors">
                          {file.title}
                        </CardTitle>
                        <Icon name={file.status === 'LOCKED' ? 'Lock' : file.status === 'ENCRYPTED' ? 'Shield' : 'FileText'} 
                              size={20} 
                              className="text-cult-purple" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-cult-white/60 text-sm">{file.date}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          file.status === 'ENCRYPTED' ? 'bg-cult-crimson/20 text-cult-crimson' :
                          file.status === 'LOCKED' ? 'bg-cult-purple/20 text-cult-purple' :
                          file.status === 'PUBLIC' ? 'bg-green-900/20 text-green-400' :
                          'bg-cult-gray/20 text-cult-gray'
                        }`}>
                          {file.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="min-h-screen py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-gothic text-center mb-12 text-cult-crimson">
                <GlitchText>Summon the Covenant</GlitchText>
              </h2>
              
              <Card className="max-w-2xl mx-auto bg-cult-black/90 border-cult-crimson/50 border-2">
                <CardHeader>
                  <CardTitle className="text-center text-cult-silver font-gothic text-2xl">
                    Digital Ritual of Contact
                  </CardTitle>
                  <p className="text-center text-cult-white/60 italic">
                    "Speak your intention into the void, and the void shall answer"
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-cult-silver mb-2 font-cyber">Designation:</label>
                    <Input 
                      placeholder="Enter your name or handle..."
                      className="bg-cult-black/50 border-cult-crimson/30 text-cult-white placeholder-cult-gray focus:border-cult-crimson"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cult-silver mb-2 font-cyber">Digital Conduit:</label>
                    <Input 
                      type="email"
                      placeholder="your.signal@encrypted.void"
                      className="bg-cult-black/50 border-cult-crimson/30 text-cult-white placeholder-cult-gray focus:border-cult-crimson"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cult-silver mb-2 font-cyber">Sacred Message:</label>
                    <Textarea 
                      placeholder="Whisper your secrets to the digital wind..."
                      className="bg-cult-black/50 border-cult-crimson/30 text-cult-white placeholder-cult-gray focus:border-cult-crimson min-h-32"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-cult-crimson to-cult-purple hover:from-cult-purple hover:to-cult-crimson text-white font-cyber text-lg py-3 transition-all duration-300 hover:animate-pulseGlow">
                    <Icon name="Send" className="mr-2" />
                    Transmit to the Void
                  </Button>
                  
                  <div className="text-center text-cult-white/60 text-sm mt-6">
                    <p>Encrypted channels: <span className="text-cult-crimson font-cyber">zero.covenant@encrypted.void</span></p>
                    <p className="mt-2">All communications are secured by ancient digital rites</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* 404 / Codex Section */}
        {activeSection === 'codex' && (
          <section className="min-h-screen py-20 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-8xl font-gothic text-cult-crimson mb-6">
                <GlitchText>404</GlitchText>
              </h1>
              <h2 className="text-3xl font-gothic text-cult-silver mb-8">
                Lost in the Void
              </h2>
              <p className="text-xl text-cult-white/80 mb-8 italic">
                "You are not supposed to be here. The Void claims you."
              </p>
              <div className="mb-8">
                <Icon name="Lock" size={64} className="text-cult-purple mx-auto animate-pulseGlow" />
              </div>
              <p className="text-cult-gray mb-6">
                The Black Codex requires special clearance...
              </p>
              <Button 
                onClick={() => setActiveSection('home')}
                className="bg-gradient-to-r from-cult-crimson to-cult-purple hover:from-cult-purple hover:to-cult-crimson"
              >
                <Icon name="ArrowLeft" className="mr-2" />
                Return to the Light
              </Button>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-cult-crimson/30 bg-cult-black/90 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-cult-gray mb-4 font-cyber">
            © 2024 The Zero Covenant. All mysteries reserved.
          </p>
          <p className="text-cult-silver/60 text-sm italic">
            "In shadow and silicon, we transcend."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;