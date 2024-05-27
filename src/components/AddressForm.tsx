import React, { useEffect, useRef } from "react";

const AddressForm = () => {
  const postcodeRef = useRef(null);
  const roadAddressRef = useRef(null);
  const jibunAddressRef = useRef(null);
  const detailAddressRef = useRef(null);
  const extraAddressRef = useRef(null);
  const guideRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        const roadAddr = data.roadAddress;
        let extraRoadAddr = "";

        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr +=
            extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        if (extraRoadAddr !== "") {
          extraRoadAddr = " (" + extraRoadAddr + ")";
        }

        postcodeRef.current.value = data.zonecode;
        roadAddressRef.current.value = roadAddr;
        jibunAddressRef.current.value = data.jibunAddress;

        if (roadAddr !== "") {
          extraAddressRef.current.value = extraRoadAddr;
        } else {
          extraAddressRef.current.value = "";
        }

        if (data.autoRoadAddress) {
          guideRef.current.innerHTML =
            "(예상 도로명 주소 : " + data.autoRoadAddress + extraRoadAddr + ")";
          guideRef.current.style.display = "block";
        } else if (data.autoJibunAddress) {
          guideRef.current.innerHTML =
            "(예상 지번 주소 : " + data.autoJibunAddress + ")";
          guideRef.current.style.display = "block";
        } else {
          guideRef.current.innerHTML = "";
          guideRef.current.style.display = "none";
        }
      },
    }).open();
  };

  return (
    <div>
      <input
        type="text"
        id="sample4_postcode"
        placeholder="우편번호"
        ref={postcodeRef}
      />
      <input type="button" onClick={handlePostcode} value="우편번호 찾기" />
      <br />
      <input
        type="text"
        id="sample4_roadAddress"
        placeholder="도로명주소"
        ref={roadAddressRef}
      />
      <input
        type="text"
        id="sample4_jibunAddress"
        placeholder="지번주소"
        ref={jibunAddressRef}
      />
      <span
        id="guide"
        style={{ color: "#999", display: "none" }}
        ref={guideRef}
      ></span>
      <input
        type="text"
        id="sample4_detailAddress"
        placeholder="상세주소"
        ref={detailAddressRef}
      />
      <input
        type="text"
        id="sample4_extraAddress"
        placeholder="참고항목"
        ref={extraAddressRef}
      />
    </div>
  );
};

export default AddressForm;
