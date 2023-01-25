this.state = {
    isServiceHovered: false
  }
  //onMouseEnter
//마우스가 요소에 올라왔을때 isShopHovered를 true로 바꿔준다
onMouseEnter={() =>
    this.setState({ isServiceHovered: !this.state.isServiceHovered })
  }
  //마우스가 요소에서 나갔을때 isShopHovered를 false로 바꿔준다
  onMouseLeave={() =>
    this.setState({ isServiceHovered: !this.state.isServiceHovered })
  }

  //shop 링크 밑에 isShopHovered가 ture면 <ul>~box를 나타내기
<Link to="/">SHOP</Link>
{this.state.isServiceHovered && (
  <ul className="navbar-customer-container">
   {this.state.shopList.map((list, index) => {
    return (
     <li className="top-customer-service" key={index}>
      <Link to={list.link}>{list.text}</Link>
     </li>
    );
   })}
  </ul>
)}