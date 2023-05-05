---
title: "The Ender Dragon Queen"
draft: false
category: "High Performance"
weight: 10

product:
  id: "ender-dragon-queen"
  name: "The Ender Dragon Queen"
  price: "84.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "20 GiB"

    - name: "Storage"
      type: "readonly"
      value: "200 GiB"

    - name: "nodemodel"
      type: "readonly"
      value: "m3"

    - name: "database"
      type: "readonly"
      value: 1

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
      itemPrice: 84.00
---