import StudyPage from '@/component/layout/StudyPage';

const Main = () => {
  const example = `
    const getData = async () => {
      const res = await fetch(\`http://localhost:3000/api/random?size=10&index=0\`);

      if (!res.ok) {
        throw new Error('data fetch error.');
      }

      return res.json();
    };

    const Main = async () => {
      const { data } = await getData();
      return <div>{JSON.stringify(data)}</div>;
    };

    export default Main;
  `;
  return (
    <StudyPage pageNumber={1}>
      <p className="mb-10">첫 번째 문제는 Next.js 사용법과 스터디의 방향성을 익히기 위한 난이도로 설정하였습니다.</p>
      <h4 className="text-xl font-bold mb-5">요구사항</h4>
      <pre className="mb-10">
        <li>
          &quot;api/random&quot; 주소로 api 요청을 보내 데이터를 받아옵니다. 사용할 수 있는 query 는 다음과 같습니다.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp; size : size에 해당하는 숫자만큼 데이터를 받습니다.
          <br />
          &nbsp;&nbsp;&nbsp; index : index에 해당하는 숫자부터 인덱스 데이터를 받습니다.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp; 다음은 예시 코드입니다.
          <br />
          <br />
          <div className="bg-slate-700">{example}</div>
        </li>
        <br />
        <li>
          위 데이터를 테이블 형태로 볼 수 있게 해주세요.
          <br />
          이때 처음엔 10개 만 보여주시고 이후 &quot;더보기&quot; 버튼을 통해 10개 씩 추가로 보여주는 컴포넌트를
          만들어주세요.
        </li>
        <br />
        <li>어떻게 만들지, 방향을 어떤식으로 할 지, 추가로 기능을 넣을지는 자유입니다.</li>
      </pre>
    </StudyPage>
  );
};

export default Main;
