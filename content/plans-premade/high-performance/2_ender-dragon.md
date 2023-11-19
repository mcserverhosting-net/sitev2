---
title: "Ender Dragon"
draft: false
category: "Self Hosted"
weight: 1

product:
  id: "ender-dragon"
  name: "Ender Dragon"
  price: "195.00"

  customFields:
    - name: "CPU"
      type: "readonly"
      value: "4"

    - name: "RAM"
      type: "readonly"
      value: "4 GiB"

    - name: "STORAGE"
      value: "32GiB|64GiB[+10]|128GiB[+30]"

    - name: "WIFI"
      type: "checkbox"
      value: "true[10]|false"

    - name: "nodemodel"
      type: "hidden"
      value: "selfhost"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      itemPrice: 195.00

---