export const addItemToCart = (cartItems, cartItemToAdd) => {
  //* IF BARANG SUDAH ADA DI CART
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
            //* HANYA BARANG YNG DIPLIH YANG BERUBAH
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    //* IF BARANG BLM ADA DI CART
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


//* // // // //  //

  export const removeItemFromCart = (allBarangDiKeranjang, barangYangDihapus) => {

    
allBarangDiKeranjang.map(x => console.log(x))

    //* JIKA SISA BARANG SUDAH 1 MAKA HAPUS
    if (barangYangDihapus.quantity === 1) {
      //* cari barang yang tidak sama dengan barang yang dihapus
      const query = allBarangDiKeranjang.filter(barangDiKeranjang => barangDiKeranjang.id !== barangYangDihapus.id);
      return query

    }
  
    return allBarangDiKeranjang.map(barangDiKeranjang =>
      barangDiKeranjang.id === barangYangDihapus.id
      //* spread equivalent {id: 2, name: "Blue Beanie", imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png", price: 18, quantity: 4}id: 2imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png"name: "Blue Beanie" price: 18 quantity: 4}
        ? { ...barangDiKeranjang, quantity: barangDiKeranjang.quantity - 1 }
        : barangDiKeranjang
    );
  };