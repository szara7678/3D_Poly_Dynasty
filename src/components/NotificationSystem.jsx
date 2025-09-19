import React, { useState, useEffect } from 'react';
import { addNotificationListener, getCurrentNotifications } from '../utils/notificationManager';

// 알림 시스템 컴포넌트
export default function NotificationSystem() {
  const [currentNotifications, setCurrentNotifications] = useState([]);

  useEffect(() => {
    // 리스너 등록
    const unsubscribe = addNotificationListener((newNotifications) => {
      setCurrentNotifications(newNotifications);
    });
    
    // 초기 알림 설정
    setCurrentNotifications(getCurrentNotifications());
    
    return unsubscribe;
  }, []);

  return (
    <>
      {currentNotifications.map(notification => (
        <div
          key={notification.id}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 z-[10000] font-semibold"
          style={{
            color: notification.color,
            fontSize: notification.fontSize,
            fontFamily: notification.fontFamily,
            animation: 'slideUp 3s ease-out forwards'
          }}
        >
          {notification.message}
        </div>
      ))}
    </>
  );
}