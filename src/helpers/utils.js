export const isMobile = window.innerWidth <= 700;
export const isDesktopBigScreen = window.innerWidth > 1024;

export const getStatus = (status) => {
  if (status) {
    if (status === 'progress') return 'EM ANDAMENTO';
    if (status === 'done') return 'CONCLUÍDA';  
  }

  return 'NÃO REALIZADA';
};