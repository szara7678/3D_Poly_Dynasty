// 전역 알림 관리자
let notificationId = 0;
let notifications = [];
let listeners = [];

// 알림 추가 함수
export const showNotification = (message, options = {}) => {
  const id = ++notificationId;
  const notification = {
    id,
    message,
    color: options.color || '#ffffff', // 기본 흰색
    duration: options.duration || 3000, // 기본 3초
    fontSize: options.fontSize || '16px',
    fontFamily: options.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
  };
  
  notifications.push(notification);
  
  // 자동 제거 타이머
  setTimeout(() => {
    removeNotification(id);
  }, notification.duration);
  
  // 리스너들에게 알림
  listeners.forEach(listener => listener([...notifications]));
  
  return id;
};

// 알림 제거 함수
export const removeNotification = (id) => {
  notifications = notifications.filter(n => n.id !== id);
  listeners.forEach(listener => listener([...notifications]));
};

// 리스너 등록 함수
export const addNotificationListener = (listener) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
};

// 현재 알림 목록 가져오기
export const getCurrentNotifications = () => [...notifications];
