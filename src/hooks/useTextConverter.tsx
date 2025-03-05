
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { convertToHumanText, generateVerificationCode, verifyCode } from '@/utils/deepseekApi';

export const useTextConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [verificationInput, setVerificationInput] = useState('');
  const [displayCode, setDisplayCode] = useState('');
  
  // Generate a random verification code on component mount
  useEffect(() => {
    setDisplayCode(generateVerificationCode());
  }, []);
  
  const resetOutput = () => {
    setOutputText('');
  };
  
  const handleTextChange = (text: string) => {
    setInputText(text);
    // Reset output if input changes
    if (outputText) {
      resetOutput();
    }
  };
  
  const convertText = async (mode: 'tony' | 'iron') => {
    // Validate input
    if (!inputText.trim()) {
      toast.error('Please enter some text to convert');
      return;
    }
    
    // Validate verification code
    if (!verificationInput.trim()) {
      toast.error('Please enter the verification code');
      return;
    }
    
    // Check if verification code is correct
    if (verificationInput !== displayCode) {
      toast.error('Incorrect verification code');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      const result = await convertToHumanText({ 
        text: inputText, 
        mode, 
        verificationCode: verificationInput 
      });
      
      if (result.success) {
        setOutputText(result.humanizedText);
        toast.success('Text successfully humanized!');
        
        // Generate a new verification code for next conversion
        setDisplayCode(generateVerificationCode());
        setVerificationInput('');
      } else {
        toast.error(result.error || 'Failed to convert text');
      }
    } catch (error) {
      console.error('Error in conversion:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleHumanizeAgain = () => {
    setOutputText('');
    // Generate a new verification code
    setDisplayCode(generateVerificationCode());
    setVerificationInput('');
  };
  
  return {
    inputText,
    outputText,
    isProcessing,
    verificationInput,
    displayCode,
    handleTextChange,
    setVerificationInput,
    convertText,
    handleHumanizeAgain,
  };
};
