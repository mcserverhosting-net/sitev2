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

    - name: "STORAGE"
      type: "readonly"
      value: "200 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m3"

    - name: "DATABASES"
      type: "readonly"
      value: 1

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "hidden"
      value: 10
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 84.00
---