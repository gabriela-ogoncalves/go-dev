export const isMobile = window.innerWidth <= 600;

export const getStatus = (status) => {
  if (status) {
    if (status === 'progress') return 'EM ANDAMENTO';
    if (status === 'done') return 'CONCLUÍDA';  
  }

  return 'NÃO REALIZADA';
};