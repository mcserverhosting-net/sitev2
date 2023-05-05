---
title: "rabbit"
draft: false
category: "Economy"
weight: 2

product:
  id: "rabbit"
  name: "Rabbit"
  price: "5.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "4 GiB"

    - name: "Storage"
      type: "readonly"
      value: "40 GiB"

    - name: "nodemodel"
      type: "readonly"
      value: "m1"

    - name: "database"
      type: "readonly"
      value: 2

    - name: "snapshots"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "readonly"
      value: 10
      
    - name: "servertype"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 5.00
---
