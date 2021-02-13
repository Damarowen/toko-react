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

  export const removeItemFromCart = (barang, barangYangDihapus) => {

    const existingCartItem = barang.find(
      cartItem => cartItem.id === barangYangDihapus.id
    );
  
    //* JIKA SISA BARANG SUDAH 1 MAKA HAPUS
    if (existingCartItem.quantity === 1) {
      console.log('1', barang)
      const query = barang.filter(cartItem => cartItem.id !== barangYangDihapus.id);
      console.log('2', query)
      return query

    }
  
    return barang.map(cartItem =>
      cartItem.id === barangYangDihapus.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };