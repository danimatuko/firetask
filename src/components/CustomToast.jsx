import { useToast } from '@chakra-ui/react';

function CustomToast({ message }) {
  const toast = useToast();
  const id = 'created-project-toast';

  if (!toast.isActive(id)) {
    return toast({
      id,
      description: message,
      position: 'top',
      variant: 'subtle',
      status: 'success',
      duration: 3000,
    });
  }
}

export default CustomToast;
