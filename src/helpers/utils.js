export const isMobile = window.innerWidth <= 700;
export const isDesktopBigScreen = window.innerWidth > 1024;

export const getStatus = (status) => {
  if (status) {
    if (status === 'progress') return 'EM ANDAMENTO';
    if (status === 'done') return 'CONCLUÍDA';  
  }

  return 'NÃO REALIZADA';
};

export const getRow = (isSmall) => {
  if (isSmall || isMobile) {
    return 1;
  }

  if (!isSmall || !isMobile) {
    return 2;
  }
};

export const setStyle = (isSmall) => {
  if (!isMobile && isSmall) {
    return 'trilho-desktop-small';
  } else if (isMobile) {
    return 'trilho-mobile';
  } else {
    return '';
  }
};

