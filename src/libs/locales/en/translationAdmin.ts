const translationAdmin = {
  company: {
    company: {
      menu: {
        title: 'Công ty',
      },
      listMyCompany: {
        title: 'Danh Sách Công Ty',
        table_company: 'Tên công ty',
        table_address: 'Địa chỉ',
        table_typeOfEmployee: 'Hình thức nhân viên',
        table_position: 'Chức vụ/Vị trí',
        table_status: 'Trạng thái',
        table_action: 'Hành động',
      },
      create: {
        title: 'Khai báo công ty',
        name: 'Tên công ty',
        shortName: 'Tên rút gọn',
        code: 'Mã công ty',
        address: {
          country: 'Quốc gia',
          stateCity: 'Bang/Thành phố',
          zipCode: 'ZipCode',
          addressLine1: 'Địa chỉ dòng 1',
          addressLine2: 'Địa chỉ dòng 2',
          shortAddress: 'Địa chỉ rút gọn',
        },
        phone: {
          code: 'Mã vùng',
          number: 'Số điện thoại',
        },
        timezone: 'Múi giờ',
        dateFormat: 'Dịnh dạng ngày tháng',
        currency: 'Đơn vị tiền tệ',
        description: 'Định nghĩa',
        note: 'Ghi chú',
      },
    },
    branch: {
      list: {
        title: 'Danh Sách Chi Nhánh',
        table_company: 'Chi nhánh',
        table_address: 'Địa chỉ',
        table_typeOfEmployee: 'Hình thức nhân viên',
        table_position: 'Chức vụ/Vị trí',
        table_status: 'Trạng thái',
        table_action: 'Hành động',
      },
    },
  },
  product: {
    product: {
      create: {
        titleCreate: 'Khai Báo Sản Phẩm',
        titleUpdate: 'Sửa Thông Tin Sản Phẩm',
        detail: {
          name: 'Tên sản phẩm',
          code: 'Mã',
          mainUnit: 'Đơn vị chính',
          subUnit: 'Đơn vị phụ',
          typeOf: 'Kiểu',
          type: 'Loại',
          group: 'Nhóm',
          category: 'Danh mục',
          tag: 'Tag',
          message_error_subUnitIsMainUnit:
            'Đơn vị "{{unitName}}" đã được chọn là đơn vị chính',
          message_error_unitConversion:
            'Đơn vị "{{listUnitName}}" chưa khai báo quy đổi',
        },
      },
      list: {
        title: 'Danh Sách Sản Phẩm 123',
        label: 'sản phẩm',
        table_name: 'Tên',
        table_isCompanyAsset: 'Thuộc',
        table_typeOf: 'Kiểu',
        table_type: 'Loại',
        table_group: 'Nhóm',
        table_category: 'Danh mục',
        table_tag: 'Tag',
      },
    },
    productTypeOf: {
      create: {
        titleCreate: 'Khai Báo Kiểu Sản Phẩm',
        titleUpdate: 'Sửa Kiểu Sản Phẩm',
        name: 'Tên kiểu sản phẩm',
        code: 'Mã',
        image: 'Hình ảnh',
      },
      list: {
        title: 'Danh Sách Kiểu Sản Phẩm',
        label: 'kiểu sản phẩm',
        table_name: 'Tên',
        table_isCompanyAsset: 'Thuộc',
        table_productCount: 'Số lượng sản phẩm',
      },
    },
    productType: {
      create: {
        titleCreate: 'Khai báo loại sản phẩm',
        titleUpdate: 'Sửa loại sản phẩm',
        name: 'Tên loại sản phẩm',
        code: 'Mã',
        image: 'Hình ảnh',
      },
      list: {
        title: 'Danh Sách Loại Sản Phẩm',
        label: 'loại sản phẩm',
        table_name: 'Tên',
        table_isCompanyAsset: 'Thuộc',
        table_productCount: 'Số lượng sản phẩm',
      },
    },
    productGroup: {
      create: {
        titleCreate: 'Khai báo nhóm sản phẩm',
        titleUpdate: 'Sửa nhóm sản phẩm',
        name: 'Tên nhóm sản phẩm',
        code: 'Mã',
        image: 'Hình ảnh',
      },
      list: {
        title: 'Danh Sách Nhóm Sản Phẩm',
        label: 'nhóm sản phẩm',
        table_name: 'Tên',
        table_isCompanyAsset: 'Thuộc',
        table_productCount: 'Số lượng sản phẩm',
      },
    },
    productCategory: {
      create: {
        titleCreate: 'Khai báo danh mục sản phẩm',
        titleUpdate: 'Sửa danh mục sản phẩm',
        name: 'Tên danh mục sản phẩm',
        categoryFather: 'Danh mục cha',
        code: 'Mã',
        image: 'Hình ảnh',
      },
      list: {
        title: 'Danh Sách Danh Mục Sản Phẩm',
        label: 'danh mục sản phẩm',
        table_name: 'Tên',
        table_isCompanyAsset: 'Thuộc',
        table_categoryFather: 'Danh mục cha',
        table_productCount: 'Số lượng sản phẩm',
      },
    },
    productTag: {
      create: {
        titleCreate: 'Khai báo tag sản phẩm',
        titleUpdate: 'Sửa tag sản phẩm',
        name: 'Tên tag sản phẩm',
        code: 'Mã',
        image: 'Hình ảnh',
      },
      list: {
        title: 'Danh Sách Tag Sản Phẩm',
        label: 'tag sản phẩm',
        table_name: 'Tên',
        table_isCompanyAsset: 'Thuộc',
        table_productCount: 'Số lượng sản phẩm',
      },
    },
    productOf: {
      list: {
        title: 'Danh Sách Sản Phẩm Thuộc {{type}} "{{name}}"',
        button: {
          addMoreProduct: 'Bổ sung sản phẩm vào {{type}} "{{name}}"',
        },
      },
    },
    unit: {
      create: {
        titleCreate: 'Khai báo đơn vị',
        titleUpdate: 'Sửa đơn vị',
        name: 'Tên đơn vị',
        code: 'Mã',
        buttonCreateUnitConversion: 'Khai báo quy đổi đơn vị',
        buttonCancelUnitConversion: 'Huỷ khai báo quy đổi đơn vị',
        unitConversion: 'Quy đổi đơn vị',
        noteUnitConversion:
          'Có thể cài đặt quy đổi đơn vị riêng cho từng sản phẩm trong menu quy đổi đơn vị_ VD: Sản phẩm "Bia", 1 thùng = 24 lon, riêng bia Tiger Bạc, 1 thùng = 20 lon',
        unit1Name: 'Đơn vị 1',
        unit2Name: 'Đơn vị 2',
        conversionRate: 'Tỷ lệ quy đổi',
        notification: {
          errorUnitConversion: 'Bổ sung đầy đủ cài đặt quy đổi đơn vị',
        },
      },
      list: {
        title: 'Danh Sách Đơn Vị',
        label: 'đơn vị tính',
        table_isCompanyAsset: 'Thuộc',
        table_name: 'Đơn vị',
        table_productCount: 'Số lượng sản phẩm',
      },
    },
    unitConversion: {
      create: {
        titleCreate: 'Khai báo quy đổi đơn vị',
        titleUpdate: 'Sửa quy đổi đơn vị',
        applyForSpecialProduct: 'Áp dụng riêng cho sản phẩm',
        applyForSpecialProductDescription:
          'Bỏ trống nếu áp dụng chung cho toàn bộ sản phẩm',
        unit1: 'Đơn vị 1',
        unit2: 'Đơn vị 2',
        conversion: 'Tỷ lệ quy đổi',
        button_changePosition: 'Đảo vị trí đơn vị',
      },
      list: {
        title: 'Danh Sách Quy Đổi Đơn Vị',
        label: 'quy đổi đơn vị',
        table_unit1: 'Đơn vị 1',
        table_unit2: 'Đơn vị 2',
        table_conversionRate: 'Tỷ lệ quy đổi',
      },
    },
    addUnitToProduct: {
      title: 'Thêm đơn vị vào sản phẩm',
      product: 'Sản phẩm',
      mainUnit: 'Đơn vị chính',
      subUnit: 'Đơn vị phụ',
    },
  },

  purchase: {
    purchaseRequisition: {
      create: {
        title: 'Phiếu Yêu Cầu ( Đề Nghị ) Gọi Hàng',
        tab_info: 'Thông tin cơ bản',
        tab_detail: 'Chi tiết',
        tab_description_note: 'Mô tả/Ghi chú',
        info: {
          ticketId: 'ID phiếu',
          time: 'Thời gian tạo phiếu',
          purchaseRequisitionTemplate: 'Mẫu phiếu yêu cầu gọi hàng',
          ticketName: 'Tên phiếu',
          createdBy: 'Người tạo phiếu',
        },
      },
    },
  },

  warehouse: {
    inventory: {
      goodReceiptNote: {
        create: {
          title: 'Phiếu Nhập Hàng',
          tab_information: 'Thông tin cơ bản',
          tab_info_ticketId: 'ID phiếu',
          tab_info_time: 'Thời gian nhập hàng',
          tab_info_purchaseOrder: 'Phiếu đặt hàng đối ứng',
          tab_info_goodReceiptNoteTemplate: 'Mẫu phiếu nhập hàng',
          tab_info_ticketName: 'Tên phiếu',
          tab_info_supplier: 'Nhà cung cấp',
          tab_info_employee: 'Người nhận hàng',
          tab_info_createdBy: 'Người tạo phiếu',
          tab_detail: 'Chi tiết',
          tab_description_note: 'Mô tả/Ghi chú',
        },
        history: {
          title: 'Lịch Sử Nhập Hàng',
          label: 'nhập hàng',
          label_isDraft: 'Bản nháp',
          table_time: 'Thời gian',
          table_date: 'Ngày',
          table_name: 'Tên phiếu',
          table_employee: 'Người nhập hàng',
          table_supplier: 'Nhà cung cấp',
          table_createdBy: 'Người tạo phiếu',
          table_createdAt: 'Thời gian tạo phiếu',
          table_status: 'Trạng thái',
          table_action: 'Hành động',
        },
        addProductToGoodReceiptNote: {
          titleCreate: 'Thêm sản phẩm vào phiếu',
          titleUpdate: 'Sửa sản phẩm',
        },
      },
    },
    warehouse: {
      warehouse: {
        create: {
          titleCreate: 'Khai Báo Kho Hàng',
          titleUpdate: 'Sửa Kho Hàng',
          name: 'Tên kho hàng',
          code: 'Mã',
          image: 'Hình ảnh',
          type: 'Loại',
          group: 'Nhóm',
          warehouseFather: 'Kho hàng cha',
        },
        list: {
          title: 'Danh Sách Kho Hàng',
          label: 'kho hàng',
          table_name: 'Tên',
          table_isCompanyAsset: 'Thuộc',
          table_type: 'Loại',
          table_group: 'Nhóm',
          table_warehouseFather: 'Thuộc kho',
        },
      },
      warehouseType: {
        create: {
          titleCreate: 'Khai Báo Loại Kho Hàng',
          titleUpdate: 'Sửa Loại Kho Hàng',
          name: 'Tên loại kho hàng',
          code: 'Mã',
          image: 'Hình ảnh',
        },
        list: {
          title: 'Danh Sách Loại Kho Hàng',
          label: 'loại kho hàng',
          table_name: 'Tên',
          table_isCompanyAsset: 'Thuộc',
        },
      },
      warehouseGroup: {
        create: {
          titleCreate: 'Khai Báo Nhóm Kho Hàng',
          titleUpdate: 'Sửa Nhóm Kho Hàng',
          name: 'Tên nhóm kho hàng',
          code: 'Mã',
          image: 'Hình ảnh',
        },
        list: {
          title: 'Danh Sách Nhóm Kho Hàng',
          label: 'nhóm kho hàng',
          table_name: 'Tên',
          table_isCompanyAsset: 'Thuộc',
        },
      },
    },
    suppplier: {
      supplier: {
        create: {
          titleCreate: 'Khai Báo Nhà Cung Cấp',
          titleUpdate: 'Sửa Nhà Cung Cấp',
          name: 'Tên nhà cung cấp',
          code: 'Mã',
          image: 'Hình ảnh',
          type: 'Loại',
          group: 'Nhóm',
        },
        list: {
          title: 'Danh Sách Nhà Cung Cấp',
          label: 'nhà cung cấp',
          table_name: 'Tên',
          table_isCompanyAsset: 'Thuộc',
          table_type: 'Loại',
          table_group: 'Nhóm',
        },
      },
      supplierType: {
        create: {
          titleCreate: 'Khai Báo Loại Nhà Cung Cấp',
          titleUpdate: 'Sửa Loại Nhà Cung Cấp',
          name: 'Tên loại nhà cung cấp',
          code: 'Mã',
          image: 'Hình ảnh',
        },
        list: {
          title: 'Danh Sách Loại Nhà Cung Cấp',
          label: 'loại nhà cung cấp',
          table_name: 'Tên',
          table_isCompanyAsset: 'Thuộc',
          table_supplierCount: 'Số lượng nhà cung cấp',
        },
      },
      supplierGroup: {
        create: {
          titleCreate: 'Khai Báo Nhóm Nhà Cung Cấp',
          titleUpdate: 'Sửa Nhóm Nhà Cung Cấp',
          name: 'Tên nhóm nhà cung cấp',
          code: 'Mã',
          image: 'Hình ảnh',
        },
        list: {
          title: 'Danh Sách Nhóm Nhà Cung Cấp',
          label: 'nhóm nhà cung cấp',
          table_name: 'Tên',
          table_isCompanyAsset: 'Thuộc',
          table_supplierCount: 'Số lượng nhà cung cấp',
        },
      },
    },
  },
};

export default translationAdmin;
