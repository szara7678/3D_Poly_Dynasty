import { state } from "../game/state.js";

/**
 * 마을 범위 계산 유틸리티
 * 모든 시스템에서 동일한 범위 계산을 사용하도록 중앙화
 */
export class TownRangeCalculator {
  /**
   * 회관의 반경 계산
   * @param {Object} hall - 회관 건물 객체
   * @returns {number} 반경
   */
  static getHallRadius(hall) {
    const level = hall.level || 1;
    return 12 + 4 * (level - 1);
  }

  /**
   * 모든 활성 회관의 범위 정보 가져오기
   * @returns {Array} 회관 범위 정보 배열
   */
  static getActiveHallRanges() {
    const halls = Object.values(state.buildings).filter(b => 
      b.type === "town_hall" && !b.construct?.active
    );
    
    return halls.map(hall => ({
      id: hall.id,
      x: hall.tile?.x || 0,
      z: hall.tile?.z || 0,
      radius: this.getHallRadius(hall),
      level: hall.level || 1
    }));
  }

  /**
   * 특정 위치가 마을 범위 안에 있는지 확인
   * @param {number} x - X 좌표
   * @param {number} z - Z 좌표
   * @returns {boolean} 범위 안에 있으면 true
   */
  static isWithinTownRange(x, z) {
    const ranges = this.getActiveHallRanges();
    if (ranges.length === 0) return false;

    return ranges.some(range => {
      const distance = Math.hypot(x - range.x, z - range.z);
      return distance <= range.radius;
    });
  }

  /**
   * 가장 가까운 회관까지의 거리 계산
   * @param {number} x - X 좌표
   * @param {number} z - Z 좌표
   * @returns {number} 가장 가까운 회관까지의 거리 (범위 밖이면 음수)
   */
  static getDistanceToNearestHall(x, z) {
    const ranges = this.getActiveHallRanges();
    if (ranges.length === 0) return -1;

    let minDistance = Infinity;
    for (const range of ranges) {
      const distance = Math.hypot(x - range.x, z - range.z);
      minDistance = Math.min(minDistance, distance);
    }

    return minDistance;
  }
}
