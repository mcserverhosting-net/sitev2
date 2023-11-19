---
title: "The Ender Dragon Queen"
draft: false
category: "Self Hosted"
weight: 10

product:
  id: "ender-dragon-queen"
  name: "The Ender Dragon Queen"
  price: "295.00"

  customFields:
    - name: "CPU"
      type: "readonly"
      value: "8"

    - name: "RAM"
      type: "readonly"
      value: "8 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "128GiB|256GiB[+10]|512GiB[+30]|1024GiB[+30]"

    - name: "nodemodel"
      type: "hidden"
      value: "selfhost"

    - name: "WIFI"
      type: "checkbox"
      value: "true[10]|false"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      itemPrice: 295.00
---