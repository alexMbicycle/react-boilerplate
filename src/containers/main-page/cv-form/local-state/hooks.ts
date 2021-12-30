import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from './LanguageContext';
import { SkillContext, SkillContextType } from './SkillContext';
import { ToolContext, ToolContextType } from './ToolContext';

export function useLanguageContext(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('LanguageContext must be used within a CvFormProvider');
  }

  return context;
}

export function useSkillContext(): SkillContextType {
  const context = useContext(SkillContext);

  if (context === undefined) {
    throw new Error('LanguageContext must be used within a CvFormProvider');
  }

  return context;
}

export function useToolContext(): ToolContextType {
  const context = useContext(ToolContext);

  if (context === undefined) {
    throw new Error('ToolContext must be used within a CvFormProvider');
  }

  return context;
}
