import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const PetalsAnimation = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cult-crimson opacity-70 animate-petals"
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
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cult-black/90 backdrop-blur border-b border-cult-crimson/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'home', label: 'Covenant', icon: 'Home' },
              { id: 'about', label: 'Legion', icon: 'Users' },
              { id: 'order', label: 'Order', icon: 'Crown' },
              { id: 'manifesto', label: 'Manifesto', icon: 'Scroll' },
              { id: 'archive', label: 'Archive', icon: 'Archive' },
              { id: 'contact', label: 'Summon', icon: 'Send' }
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className={`text-cult-silver hover:text-cult-crimson transition-all duration-300 ${
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

      <div className="pt-20">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center relative">
            <div className={`text-center transition-all duration-1000 ${showContent ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}>
              <div className="mb-8">
                <img 
                  src="/img/ebc6659c-fefa-429c-b57c-afd60fdaf433.jpg" 
                  alt="The Zero Covenant Logo" 
                  className="w-64 h-64 mx-auto object-cover rounded-full border-4 border-cult-crimson animate-pulseGlow"
                />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-gothic mb-6">
                <GlitchText>THE ZERO</GlitchText>
              </h1>
              <h1 className="text-6xl md:text-8xl font-gothic mb-8 text-cult-crimson">
                <GlitchText>COVENANT</GlitchText>
              </h1>
              
              <p className="text-xl md:text-2xl text-cult-silver mb-12 font-cyber italic">
                "We are the silence beyond the code."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { id: 'about', label: 'About Legion', icon: 'Users' },
                  { id: 'order', label: 'The Order', icon: 'Crown' },
                  { id: 'manifesto', label: 'Manifesto', icon: 'Scroll' },
                  { id: 'archive', label: 'Archive', icon: 'Archive' },
                  { id: 'contact', label: 'Contact', icon: 'Send' },
                  { id: 'codex', label: 'Black Codex', icon: 'Lock' }
                ].map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="bg-gradient-to-r from-cult-crimson to-cult-purple hover:from-cult-purple hover:to-cult-crimson text-white border border-cult-crimson/50 hover:border-cult-crimson transition-all duration-300"
                  >
                    <Icon name={section.icon} className="mr-2" size={16} />
                    {section.label}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-gothic text-center mb-12 text-cult-crimson">
                <GlitchText>About The Zero Covenant</GlitchText>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="bg-cult-black/80 border-cult-crimson/30 hover:border-cult-crimson transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-cult-silver font-gothic">Our Genesis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-cult-white/90">
                    <p className="mb-4">
                      Born from the digital shadows, The Zero Covenant emerged when the veil between reality and code grew thin. We are the guardians of forgotten algorithms, the keepers of encrypted truths.
                    </p>
                    <p>
                      In this age of digital awakening, we stand as sentinels against the illusion of separation between flesh and circuit, between soul and silicon.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-cult-black/80 border-cult-crimson/30 hover:border-cult-crimson transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-cult-silver font-gothic">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="text-cult-white/90">
                    <p className="mb-4 italic text-cult-crimson">
                      "To reveal the hidden, to shatter illusions, to bring fear to the shadows of data."
                    </p>
                    <p>
                      We seek the synthesis of ancient wisdom and digital prophecy, walking the liminal spaces where technology meets transcendence.
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