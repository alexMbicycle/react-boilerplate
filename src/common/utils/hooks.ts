import { SelectChangeEvent } from '@mui/material';
import { useDebouncedFn } from 'beautiful-react-hooks';
import { Skill } from 'common/models/Skill';
import { storage } from 'containers/authentication/utils/storage';
import { useGetSkillBy } from 'containers/main-page/cv-form/components/fields/skills/lib/query-hooks';
import { useState } from 'react';

type UseFormPropsReturnType<T> = {
  values: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | any) => void;
  handleSubmit: () => void;
};

export const useForm = <T>(initialValues?: T): UseFormPropsReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = useDebouncedFn((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'true' || e.target.value === 'false') {
      setValues((v) => (
        { ...v, [e.target.name]: e.target.value === 'false' }
      ));
    } else {
      setValues((v) => ({ ...v, [e.target.name]: e.target.value?.trim() }));
    }
  }, 300);

  const handleSubmit = (): typeof values => values;

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

type Props = {
  skillId: string;
  data: Skill;
  isLoading: boolean;
};

export function useGetSkillById(): Props {
  const id = storage.getSkillId();
  const { data, isLoading } = useGetSkillBy(id as string);

  return {
    skillId: id as string,
    data: data || {} as Skill,
    isLoading,
  };
}
