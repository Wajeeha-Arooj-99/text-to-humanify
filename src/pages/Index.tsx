
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTextConverter } from '@/hooks/useTextConverter';
import Header from '@/components/Header';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import ConversionOptions from '@/components/ConversionOptions';
import VerificationInput from '@/components/VerificationInput';
import { ArrowRight } from 'lucide-react';

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
            <div className="bg-card rounded-xl shadow-sm border p-5 h-full">
              <TextArea
                value={inputText}
                onChange={handleTextChange}
                placeholder="Enter your AI-generated text here..."
                showWordCount
                className="border-none bg-transparent shadow-none min-h-[240px]"
              />
              
              <div className="mt-6 space-y-4">
                <VerificationInput
                  value={verificationInput}
                  onChange={setVerificationInput}
                  placeholder="Enter the number here..."
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
            <div className="bg-card rounded-xl shadow-sm border p-5 h-full relative">
              {!outputText && !isProcessing ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
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
                        className="px-6 py-2 rounded-md min-w-[200px] animate-fade-in"
                      >
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
      
      <footer className="py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            Text to Humanify — Transform AI content into natural human writing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
