
interface ConversionParams {
  text: string;
  mode: 'tony' | 'iron';
  verificationCode: string;
}

interface ConversionResult {
  success: boolean;
  humanizedText: string;
  error?: string;
}

// API Key for Deepseek
const DEEPSEEK_API_KEY = "sk-019665863d6b40a5851280892f4b408a";

/**
 * This function calls the Deepseek API to convert AI text to more human-like text
 */
export const convertToHumanText = async ({ 
  text, 
  mode, 
  verificationCode 
}: ConversionParams): Promise<ConversionResult> => {
  if (!text || text.trim().length === 0) {
    return {
      success: false,
      humanizedText: '',
      error: 'Please enter some text to convert'
    };
  }

  if (!verificationCode || verificationCode.trim().length === 0) {
    return {
      success: false,
      humanizedText: '',
      error: 'Please enter the verification code'
    };
  }

  try {
    // In a real implementation, we would call the Deepseek API here
    // For now, we'll simulate the API call with a timeout and response
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create a prompt for the expected Deepseek API
    const prompt = mode === 'tony' 
      ? `Convert the following AI-generated text to sound like Tony Stark would say it - confident, witty, and tech-savvy. Make it natural and human-like: "${text}"`
      : `Convert the following AI-generated text to sound like Iron Man would say it - bold, direct, and slightly sarcastic. Make it natural and human-like: "${text}"`;
    
    // Mock API response
    let humanizedText = '';
    
    if (mode === 'tony') {
      humanizedText = `Hey there! ${text.split(' ').slice(1).join(' ')}

Listen, I've been around the block - built a few suits, saved the world a couple times. So trust me when I say this is solid. The kind of stuff Pepper would approve of.

And between you and me? This is probably the best version of what you're looking for. Not that I'm bragging. Okay, maybe a little.`;
    } else {
      humanizedText = `Alright, straight talk: ${text}

But let me cut through the noise for you. In my experience - and I've got plenty - this approach works. Every time. It's like my Mark IV suit. Not the flashiest, but it gets the job done.

And honestly? That's what matters in the end. Getting it done. Successfully.`;
    }
    
    return {
      success: true,
      humanizedText
    };
  } catch (error) {
    console.error('Error converting text:', error);
    return {
      success: false,
      humanizedText: '',
      error: 'Failed to convert text. Please try again later.'
    };
  }
};

/**
 * In a real implementation, we would add a verification step here
 * For now, we'll just return a success response
 */
export const verifyCode = (code: string): boolean => {
  // For demo purposes, any code is valid
  return true;
};

/**
 * Generates a random 4-digit code for display
 */
export const generateVerificationCode = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};
