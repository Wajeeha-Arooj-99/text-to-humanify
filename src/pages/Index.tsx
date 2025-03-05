
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTextConverter } from '@/hooks/useTextConverter';
import Header from '@/components/Header';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import ConversionOptions from '@/components/ConversionOptions';
import VerificationInput from '@/components/VerificationInput';
import { ArrowRight, Loader2, RefreshCw } from 'lucide-react';

const Index = () => {
  const {
    inputText,
    outputText,
    isProcessing,
    verificationInput,
    displayCode,
    handleTextChange,
    setVerificationInput,
    convertText,
    handleHumanizeAgain,
  } = useTextConverter();
  
  const outputRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Scroll to output when it's available
  useEffect(() => {
    if (outputText && outputRef.current && isMobile) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [outputText, isMobile]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Input Section */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl font-bold flex items-center gap-2 ml-1 mb-2">
              <span className="w-1.5 h-6 bg-humanize-gold rounded-full"></span>
              Input Text
            </h2>
            <div className="bg-card rounded-xl shadow-md border p-5 h-full transition-all hover:shadow-lg">
              <TextArea
                value={inputText}
                onChange={handleTextChange}
                placeholder="Enter your AI-generated text here..."
                showWordCount
                className="border-none bg-transparent shadow-none min-h-[240px]"
              />
              
              <div className="mt-6 space-y-5">
                <VerificationInput
                  value={verificationInput}
                  onChange={setVerificationInput}
                  placeholder="Enter verification code..."
                  displayCode={displayCode}
                />
                
                <ConversionOptions
                  onSelectMode={convertText}
                  isProcessing={isProcessing}
                  displayCode={displayCode}
                />
              </div>
            </div>
          </div>
          
          {/* Output Section */}
          <div 
            ref={outputRef}
            className="space-y-4 animate-slide-up delay-100"
          >
            <h2 className="text-xl font-bold flex items-center gap-2 ml-1 mb-2">
              <span className="w-1.5 h-6 bg-red-700 rounded-full"></span>
              Humanized Output
            </h2>
            <div className="bg-card rounded-xl shadow-md border p-5 h-full relative transition-all hover:shadow-lg">
              {isProcessing && (
                <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-10">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                  <p className="text-lg font-medium">Humanizing your text...</p>
                </div>
              )}
              
              {!outputText && !isProcessing ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-humanize-gold/20 to-red-700/20 flex items-center justify-center mb-4">
                    <ArrowRight className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">Your humanized text will appear here</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">
                    Select one of the conversion modes to transform your AI text into natural, human-sounding content
                  </p>
                </div>
              ) : (
                <>
                  <TextArea
                    value={outputText}
                    placeholder="Your humanized text will appear here..."
                    readOnly
                    className="border-none bg-transparent shadow-none min-h-[240px]"
                  />
                  
                  {outputText && (
                    <div className="mt-6 flex justify-center">
                      <Button
                        variant="humanize"
                        onClick={handleHumanizeAgain}
                        className="px-6 py-2.5 rounded-md min-w-[200px] animate-fade-in"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Again Humanize AI Text
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 border-t bg-gradient-to-r from-humanize-gold/5 to-red-700/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <p className="text-center text-sm text-muted-foreground mb-2">
              Text to Humanify — Transform AI content into natural human writing
            </p>
            <div className="flex space-x-4 mt-2">
              <div className="px-2 py-1 bg-humanize-gold/10 text-xs rounded-md text-humanize-gold">
                Tony Stark Mode
              </div>
              <div className="px-2 py-1 bg-red-700/10 text-xs rounded-md text-red-700">
                Iron Man Mode
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
