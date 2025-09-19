import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tip.css"

const Tips = () => {
  return (
    <div className="contents">
  <h2>- 여행 팁 -</h2>
  <Tabs>
    <TabList>
      <Tab>🛬여행</Tab>
      <Tab>🚩안전수칙</Tab>
      <Tab>🍔현지음식</Tab>
    </TabList>

    <TabPanel>
      <h3>여행 준비 체크리스트</h3>
      <ul>
        <li>여권 및 비자 확인</li>
        <li>항공권·숙소 예약 완료</li>
        <li>여행 보험 가입</li>
        <li>환전 및 해외 결제 카드 준비</li>
        <li>필요한 전자기기·충전기 챙기기</li>
      </ul>
      <p>출발 전 계획을 철저히 세워야 여행 중 불편을 최소화할 수 있어요.</p>
    </TabPanel>

    <TabPanel>
      <h3>안전하게 여행하는 방법</h3>
      <ul>
        <li>야간 이동 시 혼자 다니지 않기</li>
        <li>귀중품은 호텔 금고에 보관</li>
        <li>현지 긴급 연락처 및 대사관 번호 숙지</li>
        <li>교통수단 이용 시 안전벨트 착용</li>
        <li>소매치기 지역 피하기</li>
      </ul>
      <p>안전수칙을 미리 숙지하면 예기치 못한 사고를 예방할 수 있어요.</p>
    </TabPanel>

    <TabPanel>
      <h3>현지 음식 즐기기</h3>
      <ul>
        <li>위생 상태 좋은 식당 선택</li>
        <li>현지인 추천 메뉴 시도하기</li>
        <li>음식 알레르기 체크</li>
        <li>소량씩 맛보기</li>
        <li>거리 음식도 믿을 수 있는 곳에서만</li>
      </ul>
      <p>현지 음식은 여행의 묘미! 하지만 위생과 안전을 항상 고려하세요.</p>
    </TabPanel>
  </Tabs>
</div>
  );
};

export default Tips;
